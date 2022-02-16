'use strict';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { spawn } = require('child_process');
const net = require('net');
const { WriteData, ReadDataArea } = require('./Mewtocol');
const mongoose = require('mongoose');
const { clientState } = require('./Client');
const { shiftTimeZone, PLC_Config, ffmpegCaptureConfig, uploadURL, uploadTime, deviceID, company } = require('./Config');
const buffer = new ArrayBuffer(4);
const f32 = new Float32Array(buffer); // [0]
const ui8 = new Uint8Array(buffer); // [0, 0, 0, 0]
const { logger, _time_ } = require("./Logger")


const SmartDetectHistory = mongoose.model('SmartDetectHistory');

var selectedValue;
var ffmpeg;
var lastInfo = ''

function capatureAndUpload(twice,lastData) {
  ffmpeg = spawn("ffmpeg", ffmpegCaptureConfig);

  ffmpeg.stdout.on('data', (data) => {
    setTimeout(() => {
      ffmpeg.kill('SIGHUP');
    }, 3000)
    // logger.log(_time_(new Date()), `stdout: ${data}`);
  });

  ffmpeg.stderr.on('data', (data) => {
    setTimeout(() => {
      ffmpeg.kill('SIGHUP');
    }, 6000)
    lastInfo = new String(data);
    // logger.log(_time_(new Date()), `stderr: ${data}`);
  });

  ffmpeg.on('close', (code) => {
    logger.log(_time_(new Date()), `child process close with code ${code}`);
  });

  ffmpeg.on('exit', (code) => {
    if (lastInfo.indexOf('No such file or directory') != -1) {
      logger.log(_time_(new Date()), lastInfo.toString());
      logger.log(_time_(new Date()), `no such camera`);
      return
    } else if (lastInfo.indexOf('Device or resource busy') != -1) {
      logger.log(_time_(new Date()), lastInfo.toString());
      logger.log(_time_(new Date()), `camera busy`);
      return
    }
    const form = new FormData();
    form.append('company', company);
    form.append('deviceID', deviceID);
    form.append('uploadImage', fs.createReadStream('uploadImage/current_frame.jpg'));
    if (twice) {
      form.append('twice', twice+"");
      form.append('lastSampleType', lastData.sampleType);
      form.append('lastValue', lastData.value+"");
      form.append('lastTime', lastData.time);
    }
    if (selectedValue != undefined) {
      form.append('selectedValue', selectedValue);
    }
    axios.post(uploadURL, form, { headers: form.getHeaders() }).then(async ({ data }) => {
      logger.log(_time_(new Date()), data);
      if (data && data.time) {
        if (twice) {
          await new SmartDetectHistory(data).save()
          setData(data);
        } else {
          capatureAndUpload(true,data)
        }
      }
    }).catch(function (error) {
      logger.log(_time_(new Date()), "server error", error.message);
    })
      .then(function () {
      });
    logger.log(_time_(new Date()), `child process exited with code ${code}`);
  });
}

setTimeout(() => {
  if (!clientState.isInspected) {
    getData("D", 2, "70");
    capatureAndUpload();
  }
}, 2000);

setInterval(() => {
  if (!clientState.isInspected) {
    getData("D", 2, "70");
    capatureAndUpload();
  }
}, uploadTime);

function setData(data) {
  var _date = new Date(data.time);
  _date = new Date(_date.getTime() - shiftTimeZone * 1000 * 60 * 60)
  var year = _date.getFullYear();
  var month = _date.getMonth() + 1;
  var date = _date.getDate();
  var hour = _date.getHours();
  var minute = _date.getMinutes();
  var second = _date.getSeconds();
  logger.log(_time_(new Date()), { year, month, date, hour, minute, value: data.value });

  f32[0] = data.value;

  var setStr = WriteData("D", [(parseInt("0x" + year) << 8) + parseInt("0x" + month),
  (parseInt("0x" + date) << 8) + parseInt("0x" + hour),
  (parseInt("0x" + minute) << 8) + parseInt("0x" + second),
  (ui8[1] << 8) + ui8[0],
  (ui8[3] << 8) + ui8[2],
  ], "70").map((e) => String.fromCharCode(e)).join("");

  const client = net.createConnection(PLC_Config, () => {
    logger.log(_time_(new Date()), 'connected to server!');
    setStr = Buffer.from(setStr);
    client.write(setStr);
    logger.log(_time_(new Date()), 'client:', setStr);
  });

  client.on('data', (data) => {
    var str = '';
    data.forEach(e => {
      str += String.fromCharCode(e);
    });
    logger.log(_time_(new Date()), "server => device:", str);
    client.end();
    client.destroy();
  });
  client.on('end', () => {
    logger.log(_time_(new Date()), 'disconnected from server');
  });
  client.on('error', () => {
    logger.log(_time_(new Date()), 'error from PLC server');
  });
}

function getData() {

  var setStr = ReadDataArea("D", 2, "230").map((e) => String.fromCharCode(e)).join("");

  const client = net.createConnection(PLC_Config, () => {
    logger.log(_time_(new Date()), 'connected to server!');
    logger.log(_time_(new Date()), 'client:', setStr);
    setStr = Buffer.from(setStr);
    client.write(setStr);
    logger.log(_time_(new Date()), 'client:', setStr);
  });

  client.on('data', (data) => {
    var str = '';
    data.forEach(e => {
      str += String.fromCharCode(e);
    });
    if (str.startsWith('%01$RD')) {
      var strTem = str.substring('%01$RD'.length)
      var a0 = parseInt("0x" + strTem.substring(0, 2))
      var a1 = parseInt("0x" + strTem.substring(2, 4))
      var a2 = parseInt("0x" + strTem.substring(4, 6))
      var a3 = parseInt("0x" + strTem.substring(6, 8))
      try {
        selectedValue = Buffer.from([a3, a2, a1, a0]).readFloatBE(0);
        logger.log(_time_(new Date()), { selectedValue });
      } catch (error) {
        logger.log(_time_(new Date()), error);
      }
    } else {
      selectedValue = undefined;
    }

    logger.log(_time_(new Date()), "server => device:", str);
    client.end();
    client.destroy();
  });
  client.on('end', () => {
    logger.log(_time_(new Date()), 'disconnected from server');
  });
  client.on('error', () => {
    logger.log(_time_(new Date()), 'error from PLC server');
  });
}

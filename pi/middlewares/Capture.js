'use strict';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { spawn } = require('child_process');
const net = require('net');
const { WriteData, ReadDataArea } = require('./Mewtocol');
const mongoose = require('mongoose');
const { clientState } = require('./Client');
const { shiftTimeZone, PLC_Config, ffmpegCaptureConfig, uploadURL, uploadTime, deviceID, company ,captureTime, getSampleTimeTime, firstUploadTime, firstGetSampleTimeTime} = require('./Config');
const buffer = new ArrayBuffer(4);
const f32 = new Float32Array(buffer); // [0]
const ui8 = new Uint8Array(buffer); // [0, 0, 0, 0]
const { logger, _time_ } = require("./Logger")


const SmartDetectHistory = mongoose.model('SmartDetectHistory');

var selectedValue;
var sampleTime = new Date(0);
var ffmpeg;
var lastInfo = ''
var dataValid = new Date() - sampleTime < 60 * 60 * 1000;

function capatureAndUpload(twice,lastData) {
  var initCaptureTime = false
  if(!twice){
    dataValid = new Date() - sampleTime < 60 * 60 * 1000;
  }
  logger.log(_time_(new Date()), _time_(new Date()), _time_(sampleTime), new Date() - sampleTime < 60 * 60 * 1000,{twice});

  ffmpeg = spawn("ffmpeg", ffmpegCaptureConfig);

  ffmpeg.stdout.on('data', (data) => {
    // setTimeout(() => {
    //   ffmpeg.kill('SIGHUP');
    // }, captureTime)
    // logger.log(_time_(new Date()), `stdout: ${data}`);
  });

  ffmpeg.stderr.on('data', (data) => {
    if(!initCaptureTime){
      setTimeout(() => {
        ffmpeg.kill('SIGHUP');
      }, captureTime)
      logger.log(_time_(new Date()), "initCaptureTime");
      initCaptureTime = true;
    }
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
      form.append('dataValid',dataValid+"");
    }
    if (selectedValue != undefined) {
      form.append('selectedValue', selectedValue);
    }
    axios.post(uploadURL, form, { headers: form.getHeaders() }).then(async ({ data }) => {
      logger.log(_time_(new Date()), data);
      if (data && data.time) {
        if (twice) {
          if(dataValid){
            await new SmartDetectHistory(data).save()
            setData(data,"69");
          }else{
            await new SmartDetectHistory(data).save()
          }
        } else {
          var [lastLocalDate] = await SmartDetectHistory.find().sort({ "_id": -1 }).limit(1)
          logger.log(_time_(new Date()), lastLocalDate, data);
          if ((lastLocalDate.deviceID == data.deviceID) &&
            (lastLocalDate.time.toJSON(), data.time) &&
            (lastLocalDate.sampleType == data.sampleType) &&
            (lastLocalDate.value == data.value)) {
            logger.log(_time_(new Date()), 'existing local results');
          } else {
            capatureAndUpload(true, data);
          }
          // logger.log(_time_(new Date()),lastLocalDate.deviceID==data.deviceID)
          // logger.log(_time_(new Date()),lastLocalDate.time.toJSON(),data.time,lastLocalDate.time.toJSON()==data.time)
          // logger.log(_time_(new Date()),lastLocalDate.sampleType==data.sampleType)
          // logger.log(_time_(new Date()),lastLocalDate.value==data.value)
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
    getSampleTime("D", 5, "120");
  }
}, firstGetSampleTimeTime);

setInterval(() => {
  getSampleTime("D", 5, "120");
}, getSampleTimeTime);

setTimeout(() => {
  if (!clientState.isInspected) {
    getSelectedValue("D", 2, "246");
    capatureAndUpload();
  }
}, firstUploadTime);

setInterval(() => {
  if (!clientState.isInspected) {
    getSelectedValue("D", 2, "246");
    capatureAndUpload();
  }
}, uploadTime);

function setData(data,pos) {
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

  var setStr = WriteData("D", [1,(parseInt("0x" + year) << 8) + parseInt("0x" + month),
  (parseInt("0x" + date) << 8) + parseInt("0x" + hour),
  (parseInt("0x" + minute) << 8) + parseInt("0x" + second),
  (ui8[1] << 8) + ui8[0],
  (ui8[3] << 8) + ui8[2],
  ], pos).map((e) => String.fromCharCode(e)).join("");

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

function getSelectedValue(dataType, dataLen, dataPos) {

  var setStr = ReadDataArea(dataType, dataLen, dataPos).map((e) => String.fromCharCode(e)).join("");

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

function getSampleTime(dataType, dataLen, dataPos) {

  var setStr = ReadDataArea(dataType, dataLen, dataPos).map((e) => String.fromCharCode(e)).join("");

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
      var min = parseInt(strTem.substring(2, 4) + strTem.substring(0, 2));
      var date = parseInt(strTem.substring(6, 8) + strTem.substring(4, 6));
      var hour = parseInt(strTem.substring(10, 12) + strTem.substring(8, 10));
      var year = parseInt(strTem.substring(14, 16) + strTem.substring(12, 14));
      var month = parseInt(strTem.substring(18, 20) + strTem.substring(16, 18));
      try {
        sampleTime = new Date(year, month - 1, date, hour, min)
        logger.log(_time_(new Date()), { year, month, date, hour, min });
      } catch (error) {
        logger.log(_time_(new Date()), error);
      }
    } else {
      // selectedValue = undefined;
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
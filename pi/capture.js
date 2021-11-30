'use strict';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { spawn } = require('child_process');
const net = require('net');
const { WriteData } = require('./Mewtocol');
const mongoose = require('mongoose');

require('./SmartDetectHistory');

const buffer = new ArrayBuffer(4);
const f32 = new Float32Array(buffer); // [0]
const ui8 = new Uint8Array(buffer); // [0, 0, 0, 0]
const { logger,_time_ } = require("./Logger")

//var PLC_Config={host:"server.delinapi.top:3000" , port: 9001 }
// var PLC_Config={host:"192.168.0.101" , port: 60002 }
var PLC_Config = { host: "192.168.0.123", port: 60001 }
var ffmpegConfig = ["-f", "v4l2", "-framerate", "30", "-video_size", "1024x576", "-i", "/dev/video0", "myvideo.mp4", "-r", "1", "-update", "1", "uploadImage/current_frame.jpg", "-y", "-y"];
var uploadURL = "http://server.delinapi.top:3000/ocr";
var uploadTime = 10*1000;

const mongoUri = 'mongodb://127.0.0.1:27017/<dbname>?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

const SmartDetectHistory = mongoose.model('SmartDetectHistory');

function capatureAndUpload() {
  var ffmpeg = spawn("ffmpeg", ffmpegConfig);

  ffmpeg.stdout.on('data', (data) => {
    setTimeout(() => {
      ffmpeg.kill('SIGHUP');
    }, 3000)
    logger.log(_time_(new Date()), `stdout: ${data}`);
  });

  ffmpeg.stderr.on('data', (data) => {
    setTimeout(() => {
      ffmpeg.kill('SIGHUP');
    }, 3000)
    logger.log(_time_(new Date()), `stderr: ${data}`);
  });

  ffmpeg.on('close', (code) => {
    logger.log(_time_(new Date()), `child process close with code ${code}`);
  });

  ffmpeg.on('exit', (code) => {
    const form = new FormData();
    form.append('company', 'delin');
    form.append('uploadImage', fs.createReadStream('uploadImage/current_frame.jpg'));
    axios.post(uploadURL, form, { headers: form.getHeaders() }).then(async(data) => {
      logger.log(_time_(new Date()), data);
      if (data.time) {
        await new SmartDetectHistory(data).save()
        setData(data);
      }
    })
    logger.log(_time_(new Date()), `child process exited with code ${code}`);
  });
}

capatureAndUpload();
setInterval(()=>{
  capatureAndUpload();
},uploadTime);


function setData(data) {
  var _date = data.time;
  var month = _date.getMonth() + 1;
  var year = _date.getFullYear();
  var date = _date.getDate();
  var hour = _date.getHours();
  var minute = _date.getMinutes();
  var second = _date.getSeconds();
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
}
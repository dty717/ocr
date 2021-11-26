'use strict';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const { spawn } = require('child_process');

const ffmpeg = spawn("ffmpeg", ["-f", "v4l2", "-framerate", "30", "-video_size", "1024x576", "-i", "/dev/video0", "myvideo.mp4", "-r", "1", "-update", "1", "uploadImage/current_frame.jpg", "-y", "-y"]);

ffmpeg.stdout.on('data', (data) => {
  setTimeout(() => {
    ffmpeg.kill('SIGHUP');
  }, 3000)
  console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
  setTimeout(() => {
    ffmpeg.kill('SIGHUP');
  }, 3000)
  console.log(`stderr: ${data}`);
});

ffmpeg.on('close', (code) => {
  console.log(`child process close with code ${code}`);
});

ffmpeg.on('exit', (code) => {
  const form = new FormData();
  form.append('company', 'delin');
  form.append('uploadImage', fs.createReadStream('uploadImage/current_frame.jpg'));
  axios.post('http://192.168.137.1:3000/ocr', form, { headers: form.getHeaders() }).then((data) => {
    console.log(data.data)
  })
  console.log(`child process exited with code ${code}`);
});





const net = require('net');
//var config={host:"server.delinapi.top:3000" , port: 9001 }
// var config={host:"192.168.0.101" , port: 60002 }
var config={host:"192.168.0.123" , port: 60001 }
const client = net.createConnection(config, () => {
  // 'connect' listener.
  console.log('connected to server!');
  var initDes =Buffer.from("%01#RDD00070000795C\r");
  client.write(initDes);
  console.log('client:',initDes);
});

client.on('data', (data) => {
  var str='';
  data.forEach(e => {
    str+=String.fromCharCode(e);
  });
  console.log("server => device:",str);
});
client.on('end', () => {
  console.log('disconnected from server');
});


var initDes =Buffer.from("%01#WDD000700007411211625043246B643C151\r");
client.write(initDes);

'use strict';
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const { spawn } = require('child_process');

//const controller = new AbortController();
//const { signal } = controller;

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




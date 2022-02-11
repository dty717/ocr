
const shiftTimeZone = 8
//const PLC_Config={host:"server.delinapi.top:3000" , port: 9001 }
// const PLC_Config={host:"192.168.8.101" , port: 60002 }
const PLC_Config = { host: "192.168.8.123", port: 60001 }
const ffmpegCaptureConfig = ["-f", "v4l2", "-framerate", "30", "-video_size", "1024x576", "-i", "/dev/video0", "myvideo.mp4", "-r", "1", "-update", "1", "uploadImage/current_frame.jpg", "-y", "-y"];
const uploadURL = "http://server.delinapi.top:3000/ocr";
// const uploadURL = "http://192.168.137.1:3000/ocr";
const uploadTime = 10 * 60 * 1000;

const camNormal = 0;
const camBusy = 0;
const camNotExist = 0;


const stunUsername = "USER"
const stunCredential = "PASSWORD"
const stunPort = 3478
const stunURL = "stun.delinapi.top" // you will have to change this
const wsHostname = "test.dty71719dfd.site";
const ffmpegInspectConfig = ["-f", "v4l2", "-framerate", "25", "-video_size", "640x480", "-i", "/dev/video0", "-f", "mpegts", "-codec:v", "mpeg1video", "-s", "640x480", "-b:v", "1000k", "-bf", "0", "udp://127.0.0.1:49999"];
const deviceID = "SmartDetect_SD_DL1119100000001";
const company = "delin";

module.exports = {
    shiftTimeZone, PLC_Config, ffmpegCaptureConfig, uploadURL, uploadTime,
    stunUsername, stunCredential, stunPort, ffmpegInspectConfig, stunURL, wsHostname,deviceID,company,
    camNormal,camBusy,camNotExist
}
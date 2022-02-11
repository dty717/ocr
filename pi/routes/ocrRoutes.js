const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
// Imports the Google Cloud client library

const SmartDetectHistory = mongoose.model('SmartDetectHistory');

const DeviceState = mongoose.model('DeviceState');
// const User = mongoose.model('User');
// const UserPhone = mongoose.model('UserPhone');
const {label,_time_} =require('../middlewares/Common')
const  {ocrCheck} = require('../services/ocrServices')
const  {sendPhonesCallBack} = require('../middlewares/Notification')
const {logger} = require('../middlewares/Logger')

const deviceType = "SmartDetect"

const router = express.Router();
var uploader = multer({ dest: './files/uploads/' });

router.post('/ocr',uploader.single('uploadImage') ,async (req, res) => {
    const { company = "abc",deviceID,selectedValue} = req.body;
    if(deviceID){
        var image = req.file;
        var ocrData = await ocrCheck(image.path);
        logger.log(_time_(new Date()),{ocrData})
        if(ocrData){
            var {time,value,type:element} = ocrData;
            time = _time_(time);
            var data  = await SmartDetectHistory.find({
                deviceID,time
            });
            if(data.length>0){
                res.send("results have existed");
                return
            }else{
                await new SmartDetectHistory({ deviceID, sampleType: element, value, time,selectedValue, dataInfo: "", temp: "" }).save()
                var body = "时间:" + time.toJSON().replace('T', ' ').replace('.000Z', '') 
                    + "\r\n数值:" + parseInt(value * 10000) / 10000 + label[element].unit
                    + "\r\n质检数值:" + parseInt(selectedValue * 10000) / 10000 + label[element].unit;
                var title = label[element].name + "做样数据";
                var notificationLevel = "dataUpdate"
                await sendPhonesCallBack({
                    deviceID, deviceType, notificationLevel,
                    callback: (users, phones) => {
                        phones.forEach(phone => {
                            var deviceLabel = users.find(user => { return user.username == phone.username }).
                                deviceID.find(device => {
                                    return device.id == deviceID
                                }).label
                            phone.body = body;
                            phone.title = deviceLabel + " " + title;
                        })
                    }
                })
                await DeviceState.updateOne(
                    { deviceID},
                    {
                        $set: { lastHistory: _time_(new Date()) }
                    }
                );
                res.send({ deviceID, sampleType: element, value, time, dataInfo: "", temp: "" });
                return;
            }
        }
    }
    res.send("results");
})

module.exports = router;

// time:{
//     type:Date,
//     required:true
// },
// sampleType:{
//     //样品信息
//     type:String,
//     required:true
// },
// sampleInfo:{
//     type:String,
// },
// value:{
//     type:Number,
//     required:true
// },
// temp:{
//     type:Number,
// },
// tempE:{
//     type:Number,
// },
// dataInfo:{
//     type:String,
// }
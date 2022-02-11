const express = require('express');
const mongoose = require('mongoose');
const DeviceState = mongoose.model('DeviceState');
const User = mongoose.model('User');
const UserPhone = mongoose.model('UserPhone');

const  {clients:serverClients,send,getClientStateInfo} = require('../middlewares/Server')
const  {clients:modbusCL2} = require('../middlewares/modbus/modbusCL2')
const  {clients:modbusCL} = require('../middlewares/modbus/modbusCL')
const  {clients:modbusO3} = require('../middlewares/modbus/modbusO3')
const  {clients:transferJ212Server} = require('../middlewares/TransferJ212Server')
const  {sendPhones,sendPhonesByDeviceType} = require('../middlewares/Notification')
const {logger} = require('../middlewares/Logger')

const router = express.Router();

router.get('/serverClients', async (req, res) => {
    res.send(serverClients)
});
router.get('/modbusCL2', async (req, res) => {
    res.send(modbusCL2)
});
router.get('/modbusCL', async (req, res) => {
    res.send(modbusCL)
});
router.get('/modbusO3', async (req, res) => {
    res.send(modbusO3)
});
router.get('/transferJ212Server', async (req, res) => {
    res.send(transferJ212Server)
});

router.all('/warning', async (req, res) => {
    var { deviceID = "SmartDetect_A_00003",deviceType="SmartDetect"} = req.body;
    sendPhonesByDeviceType({deviceID,title:"hello",body:"body",deviceType})
    res.send(phones)
    return;
    const users = await User.find({"deviceID.id":deviceID});
    var conditions = []
    users.forEach((user)=>{
        conditions.push({username:user.username,deviceType})
    })
    if(conditions.length){
        var phones = await UserPhone.find({ $or: conditions})
        phones.forEach((phone)=>{
            sendPhones({...phone.toObject(),title:"hello",body:"body"});
        })
        res.send(phones)
    }else{
        res.send({ state: "no phones" })
    }
});

router.get('/setDeviceState', async (req, res) => {
    var { deviceID = "COD_A_00001"} = req.body;
    await DeviceState.updateOne(
        { deviceID },
        {
            $set: { deviceState: [12] }
        }
    );
    var tem = await DeviceState.find({ deviceID});

    res.send(tem);
    //await DeviceState.findById(data.deviceID);
})

router.all('/controlDevice', async (req, res) => {
    var { deviceID,content} = req.body;
    var sendState = send(deviceID,"control",{content});
    switch(sendState){
        case -1:
            res.send("{\"state\":\"设备未连接\"}");
            break;
        case -2:
            res.send("{\"state\":\"设备连接忙碌\"}");
            break;
        default:
            res.send({ state: "success" })
            break
    }
    
    // var times = 8;
    // while(times--){
    //     sendState = getClientState(deviceID,"control");
    //     if(sendState>=0){
    //         res.send("{\"state\":\"设置成功\"}");
    //         break;
    //     }
    //     await sleep(500);
    // }
    // res.send("{\"state\":\"设备未反应\"}");
})


router.all('/getDeviceState', async (req, res) => {
    const { deviceID = "COD_A_00001",deviceType="WaterStation"} = req.body;
    // console.log(req.body)
    // WaterStation
    switch(deviceType){
        case "COD":
            var tem = await DeviceState.find({
                deviceID
            });
        
            if(tem.length>0){
                res.send({...tem[0].toObject(),...getClientStateInfo(deviceID)});
            }
            else{
                res.send("{\"state\":\"error\"}");
            }
            break;
        case "WaterStation":
            var tem = await DeviceState.find({
                deviceID
            });
        
            if(tem.length>0){
                res.send({...tem[0].toObject()});
            }
            else{
                res.send("{\"state\":\"error\"}");
            }
            break;
        case "SmartDetect":
            // var tem = await DeviceState.find({
            //     deviceID
            // });
            var tem = await DeviceState.aggregate([
                {
                    $match: {
                        deviceID: { $in: deviceID }
                    }
                },
                {
                    $group: {
                        _id: null,
                        lastHistory: { $max: "$lastHistory" },
                        lastUpdate: { $max: "$lastUpdate" },
                        lastParam: { $max: "$lastParam" }
                    }
                }
            ]).exec();
            // console.log(tem)
            if(tem.length>0){
                res.send({...tem[0]});
            }
            else{
                res.send("{\"state\":\"error\"}");
            }
            break;
    }
})


module.exports = router;

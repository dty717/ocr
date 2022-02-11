const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { logger } = require('../middlewares/Logger');
const { _time_ } = require('../middlewares/Common');
const User = mongoose.model('User');
const UserPhone = mongoose.model('UserPhone');
const md5 = require('md5');


const router = express.Router();
//TODO add support for signout
router.all("/api", async(req, res) => {
  console.log('api test')
  logger.log(_time_(new Date()),'api test')
  res.json({ message: "Hello from server!" });
});

router.all('/updateNotificationLevel',async (req,res)=>{
  const { username,deviceType,deviceID,notificationLevel} = req.body;
  logger.log(_time_(new Date()),"updateNotificationLevel", username,deviceType,deviceID,notificationLevel);
  console.log(_time_(new Date()),"updateNotificationLevel", username,deviceType,deviceID,notificationLevel);
  
  await User.updateOne(
    { username, "deviceID.id": deviceID },
    {
      $set:
        { "deviceID.$.notificationLevel": notificationLevel }
    }
  );
  res.status(200).send({ state: "success" });
})

router.all('/setDeviceList', async (req, res) => {
  var {username,password,deviceList=[]} = req.body 
  if(deviceList&&deviceList.length>0){
    var _deviceList = [];
    for (let index = 0; index < deviceList.length; index++) {
      var element = deviceList[index];
      var devicePassword = md5(element.username + "123").substring(0, 6)
      console.log(element,devicePassword)
      if(element.password==devicePassword&&element.id.endsWith(element.username)){
        var elem = {id:element.id,label:element.label,notificationLevel:[]};
        _deviceList.push(elem);
      }
    }
    deviceList = _deviceList;
  }
  // deviceList = [
  //   {
  //     id: 'SmartDetect_A_00001',
  //     label: '余氯1号',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_A_00002',
  //     label: '余氯2号',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_A_00003',
  //     label: '余氯3号',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_A_00004',
  //     label: '余氯4号',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_CL2_DL182108001',
  //     label: 'test',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_CL_DL60052108027',
  //     label: '余氯测试1',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_CL_DL60052108043',
  //     label: '余氯测试2',
  //     notificationLevel: []
  //   },
  //   {
  //     id: 'SmartDetect_CL2_DL182108002',
  //     label: '余氯在线2',
  //     notificationLevel: []
  //   }
  // ]
  const user = await User.findOne({ username});
  if(user){
    try {
      await user.comparePassword(password);
      console.log(deviceList)
      await User.updateOne(
        { username},
        {
          $set:
            { "deviceID": deviceList }
        }
      );
      res.send("设置成功");
      return
    } catch (error) {
      res.send("密码错误");
      return
    }
  }else{
    res.send("账号不存在");
    return
  }
})



router.all('/signup', async (req, res) => {
  const { username, password, email, pid, pType, deviceType } = req.body;
  logger.log(_time_(new Date()),"signup",{ username, password, pid, pType})
  try {
    const user = new User({ username, password, email, deviceID: [] });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    if(pType&&pid){
      await UserPhone.deleteMany({pType,deviceType,$or: [{pid},{username}]})
      await new UserPhone({
        username,
        pType,
        pid,
        deviceType
      }).save();
    }
    res.send({ token, deviceID: []});
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.message);
  }
  return;
});

router.all('/signin', async (req, res) => {
  var { username, password ,pid,pType,deviceType} = req.body;
  logger.log(_time_(new Date()),"signin",{ username, password ,pid,pType,deviceType})
  if (!username || !password) {
    username = req.query.username;
    password = req.query.password;
  }
  // console.log({pType,$or: [{pid},{username}]});
  
  if (!username || !password) {
    return res.status(422).send({ error: 'Must provide username and password' });
  }
  const user = await User.findOne({ username });
  
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or username' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    if(pType&&pid){
      await UserPhone.deleteMany({pType,deviceType,$or: [{pid},{username}]})
      await new UserPhone({
        username,
        pType,
        pid,
        deviceType
      }).save();
    }
      res.send({ token, deviceID: user.deviceID});
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or username' });
  }
});

module.exports = router;

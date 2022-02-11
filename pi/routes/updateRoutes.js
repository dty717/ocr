const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const History = mongoose.model('History');
const DeviceState = mongoose.model('DeviceState');
const User = mongoose.model('User');
const UserPhone = mongoose.model('UserPhone');
const DeviceConfig = mongoose.model('DeviceConfig');
const SmartDetectHistory = mongoose.model('SmartDetectHistory');
const {_time_, label} =require('../middlewares/Common')
const md5 = require('md5');
const iconvlite = require('iconv-lite');
const path = require('path')

const router = express.Router();
const deviceTypeLabel = {
    "CL001":"DL2018型余氯在线分析仪",
    "CL002":"DL6005型余氯便携式分析仪",
    "O3001":"纳摩尔臭氧便携式分析仪",
    "SD1119":"DL1119型智能检测数据上传仪"
}

router.all('/info/:username/:password/:deviceType/:deviceID', async (req, res) => {
    const {username,password,deviceType,deviceID} = req.params
    var content = `<!DOCTYPE html>
    <head>
        <meta charset="utf-8"/>
        <title>
            江苏德林仪器
        </title>
        <style>
            h1{
                text-align: center;
            }
            table{
                margin:0 auto;font: 2em sans-serif;
            }
            td{
                padding-left: 60px;
            }
        </style>
    </head>
    <body>
        <h1>设备信息</h1>
        <table>
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td>用户名</td>
                    <td>${username}</td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td>${password}</td>
                </tr>
                <tr>
                    <td>设备类型</td>
                    <td>${deviceTypeLabel[deviceType]}</td>
                </tr>
                <tr>
                    <td>设备编号</td>
                    <td>${deviceID}</td>
                </tr>
                <tr>
                    <td>安卓下载地址</td>
                    <td>
                        <div style="float: left;">
                            <br/>
                            <a href="http://server.delinapi.top:3000/android_smartdetect">地址1</a>
                            <br/>
                        </div>
                        <img style="margin-top: 20px;" src="data:image/gif;base64,R0lGODdhUgBSAIAAAAAAAP///ywAAAAAUgBSAAAC/4yPqcvtD6OctNqLs968+w+G4kiW5mkC6sqyhoq0wDsf8OIG8l5LvEyLtYK2XiL3G05uDGbxlhMia1CjwgnBHq26FU0L7BK1Qkp16vtJuWeveElVknHqJzuOhn/d1fI2StfXlZe2J+gEptTEh8do1ngo57Y3FucXNrdoaDnIiOj49rlJVNggeKUYKklK9+hw+jepmpf5lpYUWamrWonL9erLmctL3JZEArt4jKJna4qLkrjZNi0LuMyadVdN2RnWXS0KB6jp3PtrPit7u96aTu1+meox9XndOLqV3VFv9K2eT54FcagEFlE2L16zfaxgzeGhDYM4h6nsJYRHLsJETv8BnUHU1wmcRnQI4XE7aIfhwpH91txbo/IRJk+SCAKMlZFdS280/ZxD9U+DtJv/PgYNMRRjxR0dhQbrRotm1IYkn/mCCqrfVI9VgRUE+XLkvqOlfKIMG/FdwrRDsZ40GLZWubYh1WWMtHEgU3dJodl52A4YWWLysPFEKNPaxTpUh+Ucp/guY66OA69MdDRZrK+DvaJ02U4zTLBrKxjj+Plw3cyoJUJqTbmnaoMitua1W/Wx08pwXwvuupmo77+vg8lm9xM36HBP69bettqyZJHPOR8PXhg4UL9K3TovZllnne7RReLV/syz58eEUmaoJffm9rHhxarmDXI5z5nxs+Nep5vPVd+xtQpfkfmDzjB6BZggPu6ppKBpw1lEVXbnfLTgfQhSZCFunT0AH4JmGTVZf/aVUyFxp6G1gXEnUbjfYl+JR+JMowloVkzM7Mhjjz7+CGSQQg5JZJFGHjlkAQA7" width="82" height="82">
                    </td>
                </tr>
                <tr>
                    <td>苹果下载地址</td>
                    <td>
                        <div style="float: left;">
                            <br/>
                            <a href="https://testflight.apple.com/join/fzsZEcf9">地址1</a>
                            <br/>
                        </div>
                        <img style="margin-top: 20px;" src="data:image/gif;base64,R0lGODdhSgBKAIAAAAAAAP///ywAAAAASgBKAAAC/4yPqcvtD6OctNqLs968+w+G4kiWZgKk6roabZAiMcy+9Q1QeO2qvZyj4Xo732TGmL2IRuaP5kBGpAplU3i1BamooMSqrRqHByl47J1uWU/geQktr8PHOfrJi8OtTH69v4bHppcViOX3ZYfYpUUn6KgG2MaIBvlmmBiVtgjkJKepkybWGTeKRZok+lBE5+dqyHoFEfsqaEsYSwLndjN50rArR8blcSZJ2Wg3afx3eqg6XImJq5qY5+n7nNuFQYZdKkzLRbwKXXj9Cb4YnEnJG7w+zV5OrumdjspdVw+8Y5oPkJ6iO+H2VEs3b5Y0S73wLWDWbVq2ZLcmDgplUQyzeOwaZQk0eGwcwY0X1aC7ZLGWM3TWGn4jZaZkzIj35sUD6dCCQZw3ZRKkuclnRW1BOTWDB2vkwUce2yFlOtQUy0jhsr1zWfBnhZhGr06NZuJSz4BWP4iVVyiVhp1JRYq7p/NcW3NvseoK6qlIx6nF8K70h6ykwm0MAbXS2lLvX5iAScYF9ewq445rl1Ljmhbcy60Dy/JLlodvv5AHPy8cJFpt5Mt0PYL26xR158CUV5dVHXruq5p++UmVzXQ31pmay0FWrbC274eWTbfjdbsfYa1sT0o0ySpv0e3Wo//6Dj68+PHky5s/jz69evQFAAA7" width="82" height="82">
                    </td>
                </tr> 
            </tbody>
        </table>
    </body>
</html>`
    res.send(content);
});

router.all('/windows', async (req, res) => {
    const file = `${__dirname}/../../files/WindowsFormsApp2.exe`;
    res.download(file);
});
router.all('/windows_md5', async (req, res) => {
    const file = `${__dirname}/../../files/WindowsFormsApp2.md5`;
    res.download(file);
});
router.all('/update_bat', async (req, res) => {
    const file = `${__dirname}/../../files/update.bat`;
    res.download(file);
});
router.all('/android_waterstation', async (req, res) => {
    const file = `${__dirname}/../../files/waterstation.apk`;
    res.download(file);
});
router.all('/android_smartdetect', async (req, res) => {
    const file = `${__dirname}/../../files/app-debug.apk`;
    res.download(file);
});
router.all('/_a_', async (req, res) => {
    const file = `${__dirname}/../../files/_a_`;
    res.download(file);
});
router.all('/android_md5', async (req, res) => {
    const file = `${__dirname}/../../files/app-debug.md5`;
    res.download(file);
});
const deviceIcon = `${__dirname}/../../files/image/device/icon-equipment.png`
router.all('/image/device/:id/:img', async (req, res) => {
    const {id,img} = req.params
    const file = `${__dirname}/../../files/image/device/${id}/${img}`;
    fs.access(file, fs.constants.F_OK, (err) => {
        if(err){
            res.download(deviceIcon);
        }else{
            res.download(file);
        }
    });
});

router.all('/new/:param', async (req, res) => {

    const { param } = req.params
    switch (param.toLowerCase()) {
        case 'date':
            res.send(new Date());
            return;
        case 'smartdetecthistory':
            var deviceID = 'test';
            await new SmartDetectHistory({ deviceID, time: new Date(2001,8,8,3,3,3), sampleType: "CL", value: parseInt(Math.random() * 10) }).save();
            await new SmartDetectHistory({ deviceID, time: _time_(new Date(2002,8,8,3,3,3)), sampleType: "CL", value: parseInt(Math.random() * 10) }).save();
            res.send("SmartDetectHistory");
            return;
    }
    res.send("success");
    return;
})

router.all('/unsafeTest/:param', async (req, res,next) => {
    const { param } = req.params
    console.log(param)
    switch (param) {
        case 'updateDeviceListSmartDetect':
            const data = await fs.promises.readFile(path.join(__dirname, '/../web/updateDeviceList.html'),'utf-8');
            res.send(data.replace("//!@! change (type)",'="SmartDetect_"'));
            return;
        case 'smartdetecthistory':
            var deviceID = 'test';
            await new SmartDetectHistory({ deviceID, time: new Date(2001,8,8,3,3,3), sampleType: "CL", value: parseInt(Math.random() * 10) }).save();
            await new SmartDetectHistory({ deviceID, time: _time_(new Date(2002,8,8,3,3,3)), sampleType: "CL", value: parseInt(Math.random() * 10) }).save();
            res.send("SmartDetectHistory");
            return;
    }
    res.send("success");
    return;
})


router.all('/new', async (req, res) => {
  
    // var username = 'abc'
    // await User.updateOne(
    //     { username },
    //     {
    //         $set:
    //         {
    //             "deviceID": [
    //                 {
    //                     id:"SmartDetect_CL2_A_001",
    //                     label:"余氯1号"
    //                 }
    //             ]
    //         }
    //     }
    // );

    // _001
    
    console.log('api test');
    //DL60052108016
    //DL182108001
    for(i=0;i<2;i++){
        var index = i+1;
        // index = index.substring(index.length-3,index.length);
        var flag = "CL"
        var username = "DL18210800"+index;
        var labelName = "余氯在线"+index+"号";
        var deviceTypeLabel = "CL001"
        var firstID = flag+"_"+username;
        var deviceID = "SmartDetect_"+firstID;
        var password = md5(username+"123").substring(0,6)
        var port = 11500;
        var authToken = "st"+flag+"-"+firstID;
        
        // username = 'DL1119000000001'
        // labelName = '样机测试'
        // deviceTypeLabel = 'SD1119'
        // var firstID = 'SD'+"_"+username;
        // var deviceID = "SmartDetect_"+firstID;
        // var password = md5(username+"123").substring(0,6)

        await DeviceConfig({deviceID,firstID}).save()
        //     // await DeviceConfig.deleteOne( { deviceID } );

        await new DeviceState({
            deviceID,
            deviceConnect: false,
            deviceState: [],
            lastHistory: new Date(),
            lastUpdate: new Date(),
            lastParam: new Date()
        }).save();
        //     // await DeviceState.deleteOne( { deviceID } );

        

        await new User({ username, password ,deviceID:[{
            id:deviceID,
            label:labelName,
            notificationLevel:[]
        }]}).save();
            // await User.deleteOne( { username} );
        //
        var file=`00. 保存参数,
01. 重启设备,
02. 型号, 4G MINI DTU
03. ↓------------无线设备参数设置------------↓
04. APN, 
05. APN_USER, 
06. APN密码, 
07. ↓-------------无线socket设置-------------↓
08. 双链接(开启/关闭), 关闭
09. 十六进制登陆包和心跳包(开启/关闭), 关闭
10. 掉线检测(开启/关闭), 开启
11. 掉线检测超时时间(秒), 30
12. 链接1登陆包, ${authToken}
13. 链接1服务器地址, server.delinapi.top
14. 链接1服务器端口, ${port}
15. 链接1心跳包, 
16. 链接1心跳包间隔(秒), 100
17. 链接2登陆包, 
18. 链接2服务器地址, 
19. 链接2服务器端口, 
20. 链接2心跳包, Q
21. 链接2心跳包间隔(秒), 200
22. ↓------------485串口参数------------↓
23. 串口波特率, 9600
24. 校验(无/奇/偶), 无
25. 数据位(8/9), 8
26. 停止位(0.5/1/1.5/2), 1
27. ↓------------设备运行状态监控------------↓
28. 信号强度(1-31), 0
29. SIM卡, 读取成功
30. IMEI, 860936055557452
31. net com, CHINA MOBILE
32. net work, TDD LTE
33. 版本, mini_dtu_v4_210306
`
        
        file = iconvlite.encode(file, "gbk")
        // console.log(authToken,port)
        // fs.writeFile("C:/Users/18751/Desktop/study/tem/" + username+".csv", file, function (err) {
        //     if (err) return console.log(err);
        //     // console.log(path,' > helloworld.txt');
        // });

        // console.log("server.delinapi.top")
        console.log(authToken)
        
        console.log("http://server.delinapi.top:3000/info/"+username+"/"+password+"/"+deviceTypeLabel+"/"+firstID)
    }
    
    // DL60052108016
    // await DeviceConfig({deviceID:"SmartDetect_A_00002",firstID:"A_00002"}).save()
    // await DeviceConfig({deviceID:"SmartDetect_A_00003",firstID:"A_00003"}).save()
    // await DeviceConfig({deviceID:"SmartDetect_A_00004",firstID:"A_00004"}).save()

    res.send("success");
})


module.exports = router;
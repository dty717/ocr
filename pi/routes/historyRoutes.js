const express = require('express');
const mongoose = require('mongoose');

const History = mongoose.model('History');
const WaterStationHistory = mongoose.model('WaterStationHistory');
const SmartDetectHistory = mongoose.model('SmartDetectHistory');
const DeviceState = mongoose.model('DeviceState');

const router = express.Router();

const { createExcel } = require('../middlewares/Excel')

const { getClientStateInfo: getServerClientStateInfo } = require('../middlewares/Server')
const { getClientStateInfo: getModbusCL2ClientStateInfo } = require('../middlewares/modbus/modbusCL2')
const { getClientStateInfo: getModbusCLClientStateInfo } = require('../middlewares/modbus/modbusCL')
const { getClientStateInfo: getModbusO3ClientStateInfo } = require('../middlewares/modbus/modbusO3')
const { getClientStateInfo: getModbusTransferJ212ServerClientStateInfo } = require('../middlewares/TransferJ212Server')


// router.get('/Historys', async (req, res) => {
//   const Historys = await History.find({ userId: req.user._id });

//   res.send(Historys);
// });
router.get('/updateDevice', async (req, res) => {
  try {
    const history = new History({
      deviceID: "deviceID",
      time: new Date(),
      sampleInfo: 'sampleInfo',
      sampleId: 12,
      sampleState: "sampleState",
      tubeId: 12,
      v: 1.1,
      COD: 2.1,
      quickV: 3.1,
      slowTime: 1.2,
      dataInfo: "dataInfo",
    });
    await history.save();
    const tem = await History.find({ time: { $gt: new Date('2021-01-26T05:17:09.889+00:00') } });

    res.send(tem);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }

  await db.collection('inventory').updateOne(
    { item: 'paper' },
    {
      $set: { 'size.uom': 'cm', status: 'P' },
      $currentDate: { lastModified: true }
    }
  );

})


router.all('/Historys', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID, page, nPerPage = 10 } = req.body;
    var counts = await History.collection.countDocuments({ deviceID });
    const results = await History.find({ time: { $lt: new Date(new Date().getTime() + 1000 * 60 * 60 * 8) }, deviceID }).
      sort({ "time": -1 }).
      skip(page * nPerPage).
      limit(nPerPage);
    res.send({ historyData: results, counts });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

const { label, dataTypeLabel } = require("../middlewares/Common")

router.all('/WaterStationHistory', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID, sampleType, page, nPerPage = 10, dataType = "", startDate = new Date(0), endDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 8), type } = { ...req.body, ...req.query };
    switch (dataType) {
      case "":
      case "normalData":
      case "monthData":
      case "dailyData":
        var condition = sampleType.length ? { deviceID, time: { $lt: endDate, $gt: startDate }, sampleType } : { deviceID, time: { $lt: endDate, $gt: startDate }, };
        var counts = await WaterStationHistory.countDocuments(condition);
        if (type == "download") {
          var _results = await WaterStationHistory.find({ ...condition }).
            sort({ "time": -1 });
          var listRows = [];
          for (let index = 0; index < _results.length; index++) {
            const element = _results[index];
            listRows.push([index + 1, element.time.toJSON().replace('T', ' ').replace('.000Z', ''), label[element.sampleType].name, element.value, element.dataInfo]);
          }
          res.setHeader('Content-disposition', 'attachment; filename=waterStation.xlsx');
          res.send(await createExcel(dataTypeLabel[dataType], [
            { header: '序号', width: 10 },
            { header: '采样时间', width: 32 },
            { header: '测量类型', width: 20 },
            { header: '测量值', width: 10 },
            { header: '备注', width: 30 }
          ], ...listRows));
          return
        }
        var results = await WaterStationHistory.find({ ...condition }).
          sort({ "time": -1 }).
          skip(page * nPerPage).
          limit(nPerPage);
        res.send({ historyData: results, counts });
        break;
      case "hourData":
        var conditions = [
          {
            $addFields: {
              "day": { $dayOfYear: "$time" },
              "hour": { $hour: "$time" },
            }
          },
          {
            $sort: {
              time: 1
            }
          },
          {
            $group:
            {
              _id: { "day": "$day", "hour": "$hour", "sampleType": "$sampleType" },
              "doc": { "$first": "$$ROOT" }
            }
          }, {
            $replaceRoot: {
              "newRoot": "$doc"
            }
          }, {
            $skip: page * nPerPage
          },
          {
            $limit: nPerPage
          }
        ]
        if (sampleType.length) {
          conditions.push({
            $match: {
              $or: sampleType.map(e => { return { sampleType: e } })
            }
          })
        }
        var results = await WaterStationHistory.aggregate(
          conditions
        ).exec();
        var counts = 100000000;
        res.send({ historyData: results, counts });
        break;
    }
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.all('/SmartDetectHistory', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID, sampleType, page, nPerPage = 10, dataType = "", startDate = new Date(0), endDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 8 + 1000 * 60 * 60 * 24), type, filename = 'SmartDetect' } = { ...req.body, ...req.query };
    // console.log( { deviceID,sampleType,page,nPerPage,dataType,startDate,endDate,type,filename});
    // await new SmartDetectHistory({deviceID,time:new Date(new Date().getTime()+1000*60*60*8),sampleType:"CL",value:parseInt(Math.random()*10)}).save();

    switch (dataType) {
      case "":
      case "normalData":
      case "monthData":
      case "dailyData":
        var condition = sampleType.length ? { deviceID, time: { $lt: endDate, $gt: startDate }, sampleType } : { deviceID, time: { $lt: endDate, $gt: startDate }, };
        var counts = await SmartDetectHistory.countDocuments(condition);
        if (type == "download") {
          var _results = await SmartDetectHistory.find({ ...condition }).
            sort({ "time": -1 });
          var listRows = [];
          for (let index = 0; index < _results.length; index++) {
            const element = _results[index];
            listRows.push([index + 1, element.time.toJSON().replace('T', ' ').replace('.000Z', ''), label[element.sampleType].name, element.value, element.dataInfo]);
          }
          res.setHeader('Content-disposition', 'attachment; filename=' + encodeURI(filename) + '.xlsx');
          res.send(await createExcel(dataTypeLabel[dataType], [
            { header: '序号', width: 10 },
            { header: '采样时间', width: 32 },
            { header: '测量类型', width: 20 },
            { header: '测量值', width: 10 },
            { header: '位置', width: 30 }
          ], ...listRows));
          return
        }
        var results = await SmartDetectHistory.find({ ...condition }).
          sort({ "time": -1 }).
          skip(page * nPerPage).
          limit(nPerPage);
        res.send({ historyData: results, counts });
        break;
      case "hourData":
        var conditions = [
          {
            $addFields: {
              "day": { $dayOfYear: "$time" },
              "hour": { $hour: "$time" },
            }
          },
          {
            $sort: {
              time: 1
            }
          },
          {
            $group:
            {
              _id: { "day": "$day", "hour": "$hour", "sampleType": "$sampleType" },
              "doc": { "$first": "$$ROOT" }
            }
          }, {
            $replaceRoot: {
              "newRoot": "$doc"
            }
          }, {
            $skip: page * nPerPage
          },
          {
            $limit: nPerPage
          }
        ]
        if (sampleType.length) {
          conditions.push({
            $match: {
              $or: sampleType.map(e => { return { sampleType: e } })
            }
          })
        }
        var results = await SmartDetectHistory.aggregate(
          conditions
        ).exec();
        var counts = 100000000;
        res.send({ historyData: results, counts });
        break;
    }
  } catch (err) {
    console.log(err)
    res.status(422).send({ error: err.message });
  }
});


//@Deprecated
router.all('/FirstWaterStationHistory', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID = "WaterStation_A_00001", page, nPerPage = 10 } = req.body;

    var list = await WaterStationHistory.aggregate([
      { $sort: { time: -1, sampleType: -1 } },
      {
        $group: {
          _id: "$sampleType",
          "doc": { "$first": "$$ROOT" }
        },
      },
      {
        $replaceRoot: {
          "newRoot": "$doc"
        }
      }
    ]).exec();
    return res.send(list);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});
var labels = [
  'CODMN', 'COD', "ELE", "N", "P", "O2", "NH3", "PH", "TEM", "TUR"
]

router.all('/ListWaterStationHistory', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID = "WaterStation_A_00001", page, nPerPage = 10 } = req.body;
    var list = await WaterStationHistory.aggregate([
      {
        $project: {
          emit:
          {
            deviceID: "$deviceID",
            time: "$time",
            sampleType: "$sampleType",
            sampleInfo: "$sampleInfo",
            dataInfo: "$dataInfo",
            value: "$value"
          }
        },
      },
      {
        $group: {
          _id: {
            deviceID: "$emit.deviceID",
            sampleType: "$emit.sampleType"
          },
          emit: { $last: "$emit" },
        }
      },
      {
        $replaceWith: {
          deviceID: "$emit.deviceID",
          time: "$emit.time",
          sampleType: "$emit.sampleType",
          value: "$emit.value",
          sampleInfo: "$emit.sampleInfo",
          dataInfo: "$emit.dataInfo",
        }
      }
    ]).exec();
    return res.send(list);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.all('/ListSmartDetectHistory', async (req, res) => {
  //const tracks = await History.find({ userId: req.user._id });
  try {
    var { deviceID = "WaterStation_A_00001", page, nPerPage = 10 } = req.body;
    var list = await SmartDetectHistory.aggregate([
      {
        $match: {
          deviceID: { $in: deviceID }
        }
      },
      {
        $project: {
          emit:
          {
            deviceID: "$deviceID",
            value: "$value",
            time: "$time",
            temp: "$temp",
            dataInfo: "$dataInfo",
            sampleType: "$sampleType"
          }
        },
      },
      {
        $group: {
          _id: {
            deviceID: "$emit.deviceID",
            sampleType: "$emit.sampleType"
          },
          emit: { $last: "$emit" }
        }
      },
      {
        $replaceWith: {
          deviceID: "$emit.deviceID",
          sampleType: "$emit.sampleType",
          value: "$emit.value",
          time: "$emit.time",
          temp: "$emit.temp",
          dataInfo: "$emit.dataInfo",
        }
      },
      { $sort: { deviceID: 1 } }
    ]).exec();
    var ocrDevice = [];
    for (const device of list) {
      // if(device)
      if (device.deviceID.startsWith("SmartDetect_CL")) {
        var deviceState = getModbusCLClientStateInfo(deviceID.deviceID)
        if (deviceState.connect) {
          // device.connect = true;
        } else {
          deviceState = getModbusCL2ClientStateInfo(deviceID.deviceID);
          if (deviceState.connect) {
            // device.connect = true;
          }else{
            device.state = "disconnect";
          }
        }
      } else if (device.deviceID.startsWith("SmartDetect_O3")) {
        var deviceState = getModbusO3ClientStateInfo(deviceID.deviceID)
        if (deviceState.connect) {
          // device.connect = true;
        }else{
          device.state = "disconnect";
        }
      } else if (device.deviceID.startsWith("SmartDetect_SD")) {// ocr
        ocrDevice.push(device.deviceID);
      }
    }
    if (ocrDevice.length > 0) {
      var ocrDeviceState = await DeviceState.find({deviceID: ocrDevice})
      
      ocrDeviceState.forEach(deviceState => {
        var _device = list.find((dev)=>{return dev.deviceID==deviceState.deviceID})
        if(deviceState.deviceConnect){
          // _device.connect = deviceState.deviceConnect;
        }else{
          _device.state = "disconnect";
        }
      });
    }
    return res.send(list);
  } catch (err) {
    console.log(err)
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
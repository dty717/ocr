const mongoose = require('mongoose');

var SmartDetectHistorySchema = new mongoose.Schema({
    deviceID:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
    sampleType:{
        type:String,
        required:true
    },
    sampleInfo:{
        type:String,
    },
    value:{
        type:Number,
        required:true
    },
    temp:{
        type:Number,
    },
    tempE:{
        type:Number,
    },
    dataInfo:{
        type:String,
    }
});

// const trackSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   name: {
//     type: String,
//     default: ''
//   },
//   locations: [pointSchema]
// });

mongoose.model('SmartDetectHistory', SmartDetectHistorySchema);
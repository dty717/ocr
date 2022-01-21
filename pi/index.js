const express = require('express')
var https = require('https');
var fs = require('fs');
var http = require('http');
const mongoose = require('mongoose');

require('./models/SmartDetectHistory');

require('./middlewares/Capture');
require('./middlewares/Client');


const mongoUri = 'mongodb://admin:SUPERSECRETPASSWORD@127.0.0.1:27017/ocrDB?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'

if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

const app = express()

app.use(express.static('webrtc-from-chat'));

var httpsOptions = {
  key: null,
  cert: null
};

http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(443);
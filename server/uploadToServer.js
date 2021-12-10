// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const fs = require('fs');
var fileName = '11-11-15.jpg';

async function setEndpoint(path) {
    // Specifies the location of the api endpoint
    const clientOptions = { apiEndpoint: 'eu-vision.googleapis.com' };

    // Creates a client
    const client = new vision.ImageAnnotatorClient(clientOptions);

    // Performs text detection on the image file
    const [result] = await client.textDetection(path);
    fs.writeFile("./json/"+fileName.replace(".jpg",".json"), JSON.stringify(result), function (err) {
        if (err) return console.log(err);
        // console.log(path,' > helloworld.txt');
    });
    const labels = result.textAnnotations;
    console.log('Text:');
    labels.forEach(label => console.log(label.description));
}

setEndpoint("./image/"+fileName);

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('company', 'delin');
form.append('deviceID', 'SmartDetect_SD_DL1119000000001');
form.append('uploadImage', fs.createReadStream('./image/11-11-05.jpg'));
axios.post('http://server.delinapi.top:3000/ocr', form, { headers: form.getHeaders() }).then((data) => {
  console.log(data.data)
})

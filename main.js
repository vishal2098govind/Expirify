const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');
const fs = require('fs');
const client = new vision.ImageAnnotatorClient({
  keyFilename: './APIKey.json'
});

client
  .textDetection('./test2.jpeg')
  .then(results => {
    const labels = results;
    console.log(labels);
    const text = labels[0].fullTextAnnotaexition.text;
    fs.writeFile('temp.txt', text, err => {
      if (err) console.log(err);
      console.log('Successfully Written to File.');
    });
  })
  .catch(err => {
    console.log('ERROR:', err);
  });

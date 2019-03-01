const fs = require('fs');
const stream = require('stream');
const path = require('path');
const config = require('config');
const rp = require('request-promise');
const streamTransform = require(path.join(config.get('workersRoot'), '02createJSONstreamTransform.js'));


exports.get = async function(ctx) {

  // open raw json, transform, and save as filtered.json
  const fileIn = await fs.createReadStream(path.join(config.get('publicRoot'), 'rawJsonFile.json'), {
  highWaterMark: 48
});
  const jsonObject = new streamTransform();

  
  const fileOut = await fs.createWriteStream(path.join(config.get('publicRoot'), 'filtered.json'),{
  highWaterMark: 1024
});


  
  stream.pipeline(
    fileIn, jsonObject, fileOut,
    (err) => {
      if (err) console.log(err);
      else console.log('filtered.json saved!');
      
    }
  );



};



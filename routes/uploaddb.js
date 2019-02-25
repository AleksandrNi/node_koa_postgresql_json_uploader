const fs = require('fs');
const stream = require('stream');
const path = require('path');
const config = require('config');


const streamTransform = require(path.join(config.get('workersRoot'), '04uploadDBstreamTransform.js'));

exports.get = async function(ctx) {

  require(path.join(config.get('workersRoot'), '03createdbPostgresql.js'));

  // open json, transform, and save as filtered.json
  const fileIn = await fs.createReadStream(path.join(config.get('publicRoot'), 'filtered.json'), {
    highWaterMark: 100
  });

  const jsonObject = new streamTransform();

  stream.pipeline(
    fileIn, jsonObject,
    (err) => {
      if (err) console.log(err);
      else console.log('json uploaded in postresql');
    }
  );



};
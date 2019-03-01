const fs = require('fs');
const stream = require('stream');
const path = require('path');
const config = require('config');
const streamTransform = require(path.join(config.get('workersRoot'), '02createJSONstreamTransform.js'));


exports.get = async function(ctx) {
// creat 300 files with 400 objects each.
for (let i = 0; i < 301 ; i++) {
  setTimeout(async () => {


      // open raw json, transform, and save as filtered.json
      const fileIn = await fs.createReadStream(path.join(config.get('publicRoot'), 'rawJsonFile.json'));
      const jsonObject = new streamTransform();

      const fileOut = await fs.createWriteStream(path.join(config.get('publicRoot'),'filtered', `filtered.${i}.json`));

      stream.pipeline(
        fileIn, jsonObject, fileOut,
        (err) => {
          if (err) console.log(err);
          else console.log('filtered.json saved!');
          
        }
      );

  }, 1000*i)
}

};



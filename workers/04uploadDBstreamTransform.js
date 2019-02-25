const stream = require('stream');
const config = require('config');

/*const fs = require('fs');
const stream = require('stream');
const path = require('path');
const config = require('config');*/

const {Pool} =require('pg');
pool = new Pool(config.get('dbConfigTest'));
const bdJsonParams = config.get('bdJsonParams');

class AddLineNumberStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.buffer = '';
    this.objBody = '';
    this.starter = ''; 

  }

  async _transform(chunk, encoding, callback) {


    let str = this.buffer + chunk.toString('utf-8');

    let objBegin = str.indexOf('title');
    let objEnd = str.indexOf('jpg"},');

    // looking for end of object to take it
    if( ~objEnd ) {
      // copy begin and the end of object 
      // params to edit in future ==> - 2, + 5
      let objectBuffer = str.slice(objBegin - 2, objEnd + 5); 

      str = str.slice(objEnd + 6);

      objectBuffer = '[' + objectBuffer + ']';

      let parseObj = JSON.parse(objectBuffer);

      let params = [];
      for (let i in bdJsonParams) {
        if(i == 4){
          params[i] = parseInt(parseObj[0][bdJsonParams[i]]) || null;
        } else {
          params[i] = parseObj[0][bdJsonParams[i]];
        
      }
        }

    await pool.query("INSERT INTO books( title, date, author, description, ISBN, image ) VALUES($1, $2, $3, $4, $5, $6)", params);
    };

    this.buffer = str;

    this.objBody = '';
    callback(null, Buffer.from(this.objBody));
  }

}


module.exports = AddLineNumberStream;

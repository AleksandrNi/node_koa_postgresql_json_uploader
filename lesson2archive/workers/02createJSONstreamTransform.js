const stream = require('stream');
const config = require('config');
const inputJsonParams = config.get('inputJsonParams');
const monthNames = config.get('monthNames');
const bdJsonParams = config.get('bdJsonParams');
const pick = require('lodash').pick;



class AddLineNumberStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.buffer = '';
    this.objBody = '';
    this.starter = ''; 
    this.counter = 0;
  }

  _transform(chunk, encoding, callback) {
  
    let str = this.buffer + chunk.toString('utf-8');

    let objBegin = str.indexOf('book_id');
/*    let image = str.indexOf('image"');
*/    let objEnd = str.indexOf('g"},' , objBegin + 1);

    // looking for end of object to take it
    if( ~objEnd ) {
      // copy begin and the end of object 
      // params to edit in future ==> - 2, + 5
      let objectBuffer = str.slice(objBegin - 2, objEnd + 3); 
      str = str.slice(objEnd + 3);

/*      console.log(   objectBuffer    );*/

      objectBuffer = '[' + objectBuffer + ']';
      console.log(objectBuffer);

      // parse object
      // pick => takes need params from came object, 
      // Object.assign put ptops in new object
      // stringify it back

      let parseObj = JSON.parse(objectBuffer);
      this.objBody = Object.assign({}, pick(parseObj[0], inputJsonParams));
console.log(       this.counter ++   );
/*      console.log( this.counter++ );
      console.log(   objectBuffer    );*/
      //make this.objBody with params we need 
      let tempObj = {};
      for (let i in bdJsonParams) {

        // transform data to postgreSQL standart: from "date":"Dec 31, 1969"  to 2016-06-23
        if (i == 1) {
          let dateArray = this.objBody[inputJsonParams[i]].split(' ');
          dateArray[1].split(', ');
          dateArray = dateArray.map( item => {
            item.trim();
            // check month
            if( !parseInt(item)) { 
              item = monthNames[item];
              
              if(item < 10) {
                item = '0'+ item;
              };

              return item;
            }
            // check days , years
            item = parseInt(item);

            if(item < 10) {
              item = '0'+ item;
            }
            
            return item;
          });

          let formattedDateArray = [];
          formattedDateArray.push(dateArray[2]);
          formattedDateArray.push(dateArray[0]);
          formattedDateArray.push(dateArray[1]);

          this.objBody[inputJsonParams[i]] = formattedDateArray.join('-');
        }

        tempObj[bdJsonParams[i]] = this.objBody[inputJsonParams[i]];
      };

      this.objBody = tempObj;
      tempObj = '';

      this.objBody = JSON.stringify(this.objBody);
      
      if (!this.starter) {

        this.objBody = '[' + this.objBody + ',';
        this.starter = 1;
      } else { 

        this.objBody = this.objBody + ',';
      };
    };

 // on end of json add ']'
    if (~str.indexOf('\n' || 'r\n') ) { 
        this.objBody +=  ']';
        this.buffer = '';
      };

    this.buffer = str;
    callback(null, Buffer.from(this.objBody));
    this.objBody = '';
  }
}

module.exports = AddLineNumberStream;

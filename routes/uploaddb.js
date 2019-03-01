  const fs = require('fs').promises;
const path = require('path');
const config = require('config');

const inputJsonParams = config.get('inputJsonParams');
const monthNames = config.get('monthNames');
const names = config.get('names');
const lastNames = config.get('lastNames');
const bdJsonParams = config.get('bdJsonParams');
const pick = require('lodash').pick;
const rp = require('request-promise');

exports.get = async function(ctx) {

for (let i = 0; i < 301 ; i++) {
  setTimeout(async() => {
/* const createRawsCount = await pool.query("SELECT COUNT(*) FROM books");*/

  // open json, transform, and save as filtered.json

  const content = await fs.readFile(path.join(config.get('publicRoot'), 'filtered' ,`filtered.${i}.json`), 'utf8');
  if(!content) {
    ctx.throw(404);
    ctx.body = 'filtered.json is empty';
    return;
  }
  let parsedContent = JSON.parse(content);   // parsed json
  let booksParams = parsedContent[0].books;  //books
  
  Object.keys(booksParams).map(async (key, index) => {
    booksParams[key] = Object.assign({}, pick(booksParams[key], inputJsonParams));
//rename Object params
    
    let tempObject = {};

    for (let k in bdJsonParams) {
       tempObject[bdJsonParams[k]] = booksParams[key][inputJsonParams[k]];
    };
    booksParams[key] = tempObject;
    Object.keys(booksParams[key]).map((i, value) => {
      // transform data to postgreSQL standart: from "date":"Dec 31, 1969"  to 2016-06-23
      if (i == 'date') {
          let dateArray = booksParams[key][i].split(' ');
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

          booksParams[key][i] = formattedDateArray.join('-');
        }     
    })
    // prepairing and upload data in dbpostgresql
    let params = [];
    for (let j in bdJsonParams) {
       if(j == '4'){
          params[j] = parseInt(booksParams[key][bdJsonParams[j]]) || null;
        } else {
          params[j] = booksParams[key][bdJsonParams[j]];
        
      }
    }

         await pool.query("INSERT INTO books( title, date, author, description, ISBN, image ) VALUES($1, $2, $3, $4, $5, $6)", params)
         .catch(async err => {
           if(err.name =='error') {
             params = params.map((value , i) => {
               if (i == 4 ) {
                 value += parseInt(Math.random()*10e4);
               } else if (i == 2 && !value) {
                  let nameKey = parseInt(Math.random()*500);
                  let lastNameKey = parseInt(Math.random()*1000);
                  value = names[nameKey]+ ', ' + lastNames[lastNameKey];
               }

               return value;
             });
              await pool.query("INSERT INTO books( title, date, author, description, ISBN, image ) VALUES($1, $2, $3, $4, $5, $6)", params)
              .catch(err => {
                if(err.name =='error') {
                 console.error(err.detail);
                } else {
                 console.error(err);
                }
              });

           } else {
             console.error(err);
           }
         });
  });

  const createRawsCount = await pool.query("SELECT COUNT(*) FROM books");
  // QQTY rows in table books
  console.log('==========================');
  console.log(createRawsCount['rows']['0']['count']);
  console.log('==========================');





    }, 1000*i*5);
};






};
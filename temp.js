        // copy begin and the end of object 
        // params to edit in future ==> - 2, + 5
        let objectBuffer = str.slice(0, objEnd + 6); 
        str = str.slice(objEnd + 6);

        objectBuffer = '[' + objectBuffer + ']';

        // parse object
        // pick => takes need params from came object, 
        // Object.assign put ptops in new object
        // stringify it back

        let parseObj = JSON.parse(objectBuffer);
        this.objBody = Object.assign({}, pick(parseObj[0], inputJsonParams));
        console.log(       this.counter ++   );

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
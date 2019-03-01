const {Pool} =require('pg');
const config = require('config');
const path = require('path');
const JsonToTable = require(path.join(config.get('workersRoot'), 'jsonToTable.js'));
const _ = new JsonToTable();
pool = new Pool(config.get('dbConfigTest'));

exports.post = async function(ctx) {
	let tableCheck;
	let resMessage = [];

	try {
		const request = ctx.request.body;
		let string = '';

		for (let key in request) {
			if (key == 'id') {

				if (!parseInt(request[key]) ) {
					request['id'] = 10;
					resMessage.push({message: 'id type is numder', table: '' });	
				}
			} else if (request[key] && key != 'id' &&  key != 'isbn' ) {

				string +=`, ${key} = '${request[key].toString()}'`;
			} else if (request[key] &&  key == 'isbn' && parseInt(request[key])) {

				string +=`, ${key} = ${request[key] - 0}`;
			} else if (key == 'isbn' && !parseInt(request[key]) ){

					request['isbn'] = 10;
					resMessage.push({message: 'isbn type is numder', table: '' });	
					
			};
		}
		string = string.slice(1);

		if(!resMessage.length) {

			const queryString = `UPDATE books SET ${string} WHERE ID = ${request['id']} RETURNING id, description, author;`

			const result = await pool.query(queryString)
			.catch(err => {
				console.error(err);
				resMessage.push({message: 'The row wasn\'t updated. Try again later', table: '' });	
				tableCheck = true;
			});
			
			if(result.rows.length) {

				let tableString = _.jsonToTable(result.rows);
				tableCheck = true;	
			
				resMessage =  {
					message: resMessage.message ||'Update successful', 
					counter: 1,
					page: '',
					pages: '',
					table: tableString,
				};

				
			} else {
				resMessage.push({message: 'This id doesn\'t exist, so nothing to update ', table: '' });	
			}
		}

			ctx.body =  {
				table: tableCheck,
				result: resMessage,	

		}
	} catch (err) { 
			console.error(err);
			ctx.body = 'Internal server error';
			ctx.status = 500;
		};
};

const fs = require('fs');
const stream = require('stream');
const path = require('path');
const config = require('config');
const rp = require('request-promise');

const {Pool} =require('pg');

pool = new Pool(config.get('dbConfigTest'));

exports.get = async function(ctx, next) {

	try {

	  const dropbooksTable = await pool.query("DROP TABLE books");
	  const createBoolsTable = await pool.query("CREATE TABLE IF NOT EXISTS books (id serial, title VARCHAR(255) NOT NULL, date VARCHAR(100) NOT NULL, author VARCHAR(100) NOT NULL, description VARCHAR(255) NOT NULL, ISBN bigint, image VARCHAR(255) NOT NULL, PRIMARY KEY (id), UNIQUE (ISBN));");
/*	  const createRawsCount = await pool.query("SELECT COUNT(*) FROM ;");*/

	  console.log('db books created');

	} catch (err) { 
		console.error( err );
		console.error('sth wrong with creating db and uploading data');
	  ctx.status = 500;
	  ctx.body = 'Intermal server error';    
	}  


	await next();
};
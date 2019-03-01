const Koa = require('koa');
const {Pool} =require('pg');
const config = require('config');

/*const knex = require('./knex/knex.js');*/
const app = new Koa();

pool = new Pool(config.get('dbConfigTest'));

exports.get = async function(ctx) {

/*console.log( pool );
	let result = await pool.query(“SELECT NOW()”, (err, res) => {
		console.log(err, res);
		pool.end();
	});*/
	let users = [{name: 'Aleksandr', lastname: 'Nikitin'}];
	let i = 0;
try {
	const result = await pool.query('SELECT * FROM MOVIES')
	const time = await pool.query('SELECT NOW()')
	const dropUsersTable = await pool.query("DROP TABLE users");
	const usersTable = await pool.query("CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL, lastname VARCHAR(40) NOT NULL)");
	const insertUser = await pool.query("INSERT INTO users(id, firstname, lastname) VALUES(1, $1, $2)", [users[i].name, users[i].lastname]);

/*
var queryText = 'INSERT INTO users(password_hash, email) VALUES($1, $2) RETURNING id'
client.query(queryText, ['841l14yah', 'test@te.st'], function(err, result) {
  if(err) //handle error
  else {
    var newlyCreatedUserId = result.rows[0].id;
  }
});*/


	console.log(	time.rows[0].now	);

	console.log(	dropUsersTable	);
	console.log(	usersTable	);
	console.log(	insertUser	);

  ctx.body = result.rows;

} catch (err) { console.error(err)
	ctx.status = 500;
	ctx.body = 'Internal server error';		
	}
};


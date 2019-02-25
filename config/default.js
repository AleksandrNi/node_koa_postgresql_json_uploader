const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  port: process.env.PORT || 3000,
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  publicRoot: path.join(process.cwd(), 'public'),
  workersRoot: path.join(process.cwd(), 'workers'),

  // imported json params
  inputJsonParams: ['title', 'entry_date', 'author_lf', 'author_code', 'ISBN','cover'],
  bdJsonParams: ['title', 'date', 'author', 'description', 'ISBN', 'image'], 
  monthNames: { Jan: 01, Feb: 02, Mar: 03, Apr: 04, May: 05, Jun: 06, Jul: 07, Aug: 08, Sep: 09, Oct: 10, Nov: 11, Dec: 12 },

  dbConfig: {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password', // По умолчанию пароля нет
  port: 5432, // Порт по умолчанию
	},

  dbConfigTest: {
  user: 'postgres',
  host: 'localhost',
  database: 'koa_api',
  password: 'password', // По умолчанию пароля нет
  port: 5432, // Порт по умолчанию
  },

};

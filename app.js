const Koa = require('koa');
const Router = require('koa-router');
const config = require('config');
const path = require('path');

const app = new Koa();

require('./handlers/01-favicon').init(app);
require('./handlers/02-static').init(app);
require('./handlers/03-logger').init(app);
require('./handlers/04-templates').init(app);
require('./handlers/05-errors').init(app);
require('./handlers/06-session').init(app);
/*require('./handlers/07-bodyParser').init(app);*/


const router = new Router();

router.get('/createjson', require(path.join(config.get('workersRoot'), '01downloadRawJson.js')).get, require('./routes/createJSON.js').get); // create JSON ready to upload to db
router.get('/uploaddb', require(path.join(config.get('workersRoot'), '03createdbPostgresql.js')).get, require('./routes/uploaddb').get); // apload data from JSON to PostgreSQL

router.get('/', require('./routes/frontpage').get);

/*
router.get('/subscribe', async (ctx, next) => {

  ctx.set('Cache-Control', 'no-cache,must-revalidate');
  const message = await new Promise((resolve, reject) => {
    clients.push(resolve);

    ctx.res.on('close', function() {
      clients.splice(clients.indexOf(resolve), 1);
      resolve();
    });

  });

  ctx.body = message;

});

router.post('/publish', async (ctx, next) => {
  const message = ctx.request.body.message;

  if (!message) {
    ctx.throw(400, 'required field `message` is missing');
  }

  clients.forEach(function(resolve) {
    resolve(message);
  });

  clients = [];

  ctx.body = 'ok';

});*/

app.use(router.routes());

module.exports = app;

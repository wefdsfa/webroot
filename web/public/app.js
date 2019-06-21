const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');

const config = require('./config');
const loggerFactory = require('./utils/loggerFactory');
const loggerMorgan = require('./utils/loggerMorgan');
const schoolUtil = require('./utils/schoolUtil');
const dataVRouter = require('./routes/dataV');
const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index');
const commonRouter = require('./routes/common');
const systemAuth = require('./routes/systemAuth');
const aggregationRouter = require('./routes/aggregation');
const backendRouter = require('./routes/backend');
const fileRouter = require('./routes/file');
const officialRouter = require('./routes/official');
const vueRouter = require('./routes/vue');
const toolRouter = require('./routes/tool');

const logger = loggerFactory.getLogger(__filename);
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.json({
  limit: '10mb',
  extended: true
}));
app.use(useragent.express());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json({
  limit: '10mb',
  extended: true
}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: true}));

app.use(loggerFactory.setRequestIdForExpress);
app.use(loggerMorgan(__filename));
app.use('/dataV', dataVRouter);
app.use('/', indexRouter);
app.use('/', commonRouter);
app.use('/', systemAuth);
app.use('/', aggregationRouter);
app.use('/', backendRouter);
app.use('/', loginRouter);
app.use('/', fileRouter);
app.use('/', officialRouter);
app.use('/', toolRouter);
app.use('/', vueRouter);
// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  err.context = { originalUrl: req.originalUrl, method: req.method, ips: req.ips, query: req.query, body: req.body  }
  logger.error(err);
  res.status(err.status || 500);
  res.end(err.message);
});
/* 捕获全局异常，如果最终调入到了这里，要非常注意 */
process.on('uncaughtException', function(err) {
  console.error('--- uncaughtException ---');
  console.error(err);
});

process.on('unhandledRejection', function(err) {
  console.error('--- unhandledRejection ---');
  console.error(err);
});

module.exports = app;

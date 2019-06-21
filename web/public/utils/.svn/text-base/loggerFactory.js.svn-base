const util = require('util');
const path = require('path');
const uuid = require('uuid');
const cls = require('continuation-local-storage');
const clsRedis = require('cls-redis');
const winston = require('winston');

const config = require('../config');

const requestStorage = cls.createNamespace('request');
const DailyRotateFile = require('winston-daily-rotate-file');
const rootDir = process.cwd();

// make redis work with cls. only support redis 2.5.0 or before
clsRedis(requestStorage);

const loggerFileNamePrefix = `saas-${ config.dev.name }`

const colorizer = new winston.format.colorize.Colorizer();

const standardFormatter = winston.format((info, options) => {
  if (!info.hasSet) {

    // level
    info.level = info.level.padStart(5);

    // pid
    info.pid = process.pid.toString().padStart(5);

    // request id
    let localStorage = cls.getNamespace('request');
    let requestId = localStorage && localStorage.get('requestId') || 'master';
    info.requestId = requestId.padEnd(22);

    // serverName
    info.serverName = config.dev.name;

    // processTitle
    info.processTitle = `process-${process.pid}`.padEnd('13');

    // label
    const LABEL_MAX_LENGTH = 30;
    let label = (info.label || 'undefined').padEnd(LABEL_MAX_LENGTH);
    if (label.length > LABEL_MAX_LENGTH) {
      label = '..' + label.substring(label.length - LABEL_MAX_LENGTH + 2, label.length);
    }
    info.label = label;

    // message
    info.message = info.message || '';
    info.hasSet = true;
  }
  if (options.colorize) {
    colorizeLog(info);
  }
  return info;
});

const colorizeLog = (info) => {
  info.level = colorizer.colorize(info.level.trim(), info.level);
  info.pid = colorizer.colorize('silly', info.pid);
  info.requestId = colorizer.colorize('help', info.requestId);
  info.label = colorizer.colorize('help', info.label);
};

const logFormatter = winston.format.printf((info) => `${info.timestamp} ${info.level} ${info.pid} ${info.requestId} ${info.serverName} --- [${info.processTitle}] ${info.label} : ${info.message}`);

const transports = {
  console: new winston.transports.Console({
    format: winston.format.combine(
      standardFormatter({ colorize: true }),
      logFormatter
    )
  }),
  combineFile: new DailyRotateFile({
    filename: loggerFileNamePrefix + '-%DATE%.log',
    dirname: 'logs',
    maxSize: '256m',
    colorize: false,
    prettyPrint: false
  }),
  errorFile: new DailyRotateFile({
    filename: loggerFileNamePrefix + '-error-%DATE%.log',
    dirname: 'logs',
    level: 'error',
    maxSize: '256m',
    colorize: false,
    prettyPrint: false
  })
}

const commonLogger =  winston.createLogger({
  level: config.dev.loggerLevel ? config.dev.loggerLevel : ( process.env.NODE_ENV === 'production' ? 'info' : 'debug' ),
  transports: [
    transports.console,
    transports.combineFile,
    transports.errorFile
  ],
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    standardFormatter(),
    logFormatter
  )
});

class LoggerFactory {
  constructor() {
    this.commonLogger = commonLogger;
    this.loggers = {};
  }
  getLogger(filename) {
    let label = path.relative(rootDir, filename);
    if (this.loggers[label]) {
      return this.loggers[label]
    }
    this.loggers[label] = new Logger(this.commonLogger, label);
    return this.loggers[label];
  }
  setRequestIdForExpress(req, res, next) {
    requestStorage.run(function () {
      requestStorage.bindEmitter(req);
      requestStorage.bindEmitter(res);
      requestStorage.set('requestId', uuid.v4().substring(0, 22));
      next();
    })
  }
  setRequestIdFromWeb(req, res, next) {
    const requestId = req.header('X-Request-Id');
    requestStorage.run(function () {
      requestStorage.bindEmitter(req);
      requestStorage.bindEmitter(res);
      requestStorage.set('requestId', requestId || 'mobile-' + uuid.v4().substring(7, 22));
      next()
    })
  }
  removeConsoleTransport() {
    this.commonLogger.remove(transports.console);
  }
}

class Logger {
  constructor(logger, label) {
    this.logger = logger;
    this.label = label;
    this.levels = {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
    };
  }
  debug(...args) {
    this.log('debug', ...args);
  }
  info(...args) {
    this.log('info', ...args);
  }
  warn(...args) {
    this.log('warn', ...args);
  }
  error(...args) {
    this.log('error', ...args);
  }
  log(level, ...args) {
    if (this.canLog(level)) {
      this.logger[level](ObjectFormatter.format(args), { label: this.label });
    }
  }
  canLog(level) {
    return this.levels[this.logger.level] >= this.levels[level];
  }
}

class ObjectFormatter {
  static format(args) {
    if (!args || !args.length) {
      return '';
    }
    let message = '';
    let formattedArgs = [];
    for (let arg of args) {
      formattedArgs.push(typeof arg === 'string' ? arg : util.inspect(arg));
    }
    if (formattedArgs.length > 1 && formattedArgs[0].includes('%s')) {
      message = util.format.apply(util.format, formattedArgs);
    } else {
      message = formattedArgs.join(' ');
    }
    return message;
  }
}

module.exports = new LoggerFactory();

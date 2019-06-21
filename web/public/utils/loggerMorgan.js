const morgan = require('morgan');

const format = ':method :url :res[content-length] :status - :response-time ms - :remote-addr :user-agent';

module.exports = (filename) => {
  const logger = require('../utils/loggerFactory').getLogger(filename || __filename);
  return morgan(format, {
    stream: {
      write: (line) => {
        logger.info(line);
      }
    }
  });
};
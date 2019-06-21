const redis = require('redis');
const config = require('../config');
let redisClient = redis.createClient(config.dev.redis);

redisClient.on('error', (err) => {
  console.error('Redis Error', err);
});

module.exports = redisClient;

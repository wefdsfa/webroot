const async = require('async');
const logger = require('../utils/loggerFactory').getLogger(__filename)
const config = require('../config')
const redisUtil = require('../utils/redisUtil');
const officialUtil = require('../utils/officialUtil');
const SCHOOL_CONFIG_REDIS_KEY_PREFIX = 'school_config_';
const SCHOOL_YIBAN_REDIS_KEY_PREFIX = 'school_yiban_';

module.exports = {
  getConfig: (schoolUid, callback) => {
    getSchoolConfig(schoolUid, callback)
  },
  getSchoolManagers: (schoolUid, callback) => {
    getSchoolConfig(schoolUid, (err, config) => {
      if (err) {
        return callback(err);
      }
      callback(null, config.managers);
    })
  },
  isSchoolManager: (schoolUid, userNo, callback) => {
    getSchoolConfig(schoolUid, (err, config) => {
      if (err) {
        return callback(err);
      }
      if (!config.managers || !userNo) {
        return callback(null, false)
      }
      callback(null, config.managers.includes(userNo.toUpperCase()));
    })
  },
  isSchoolIdValid: (schoolUid, callback) => {
    getSchoolConfig(schoolUid, (err) => {
      if (err) {
        return callback(err, false);
      }
      callback(null, true);
    })
  },
  getSchoolLoginConfig: (schoolUid, callback) => {
    getSchoolConfig(schoolUid, (err, config) => {
      if (err) {
        return callback(err);
      }
      callback(null, config.login);
    })
  },
  getSchoolWebsiteName: (schoolUid, callback) => {
    getSchoolConfig(schoolUid, (err, config) => {
      if (err) {
        return callback(err);
      }
      callback(null, config.websiteName, config.websiteNameEn);
    })
  },
  getSchoolUidByYibanSchoolId: (yibanSchoolId, callback) => {
    getSchoolUidByYibanSchoolId(yibanSchoolId, callback);
  },
  updateSchoolCache: (schoolUid, callback) => {
    getSchoolConfigFromOfficial(schoolUid, (err, config) => {
      if (err) {
        err.context = err.context || {};
        err.context.schoolId = schoolUid;
        logger.warn(err);
        return callback && callback(err)
      }
      if (!config) {
        let error = new Error('系统配置错误, 找不到' + schoolUid + '的配置');
        logger.warn(error);
        return callback && callback(error)
      }
      if (config.managers) {
        config.managers = config.managers.map(manager => manager.toUpperCase())
      }
      redisUtil.set(getSchoolConfigCacheKey(schoolUid), JSON.stringify(config));
      updateYibanSchoolIdCache(schoolUid, config, (err) => {
        if (err) {
          logger.warn(error);
          logger.warn('[school] update yiban schoolId cache failed', schoolUid , config.yibanSchoolId);
        }
        logger.info('[school] update school config cache', schoolUid , ' successfully');
        callback && callback()
      });
    });
  },
  startScheduleToUpdateConfig: (schoolUid) => {
    module.exports.updateSchoolCache(schoolUid);
    setInterval(() => {
      module.exports.updateSchoolCache(schoolUid);
    }, 10 * 60 * 1000);
  }
};

let getSchoolConfig = (schoolUid, callback) => {
  let key = getSchoolConfigCacheKey(schoolUid);
  redisUtil.get(key, (err, reply) => {
    if (err) {
      err.context = { key };
      logger.warn(err);
    }
    if (reply) {
      try {
        reply = JSON.parse(reply);
      } catch (err) {
        return callback(err, null);
      }
      callback(null, reply);
    } else {
      getSchoolConfigFromOfficial(schoolUid, (err, config) => {
        if (err) {
          return callback(err);
        }
        if (!config) {
          return callback(new Error('系统配置错误'))
        }
        callback(null, config);
        redisUtil.set(key, JSON.stringify(config));
      });
    }
  })
};

let getSchoolUidByYibanSchoolId = (yibanSchoolId, callback) => {
  let key = getYibanSchoolIdKey(yibanSchoolId);
  redisUtil.get(key, (err, reply) => {
    if (err) {
      err.context = { key };
      logger.warn(err);
    }
    if (reply) {
      callback(null, reply);
    } else {
      officialUtil.getSchoolUidByYibanSchoolId(yibanSchoolId, (err, body) => {
        if (err) {
          return callback(err);
        }
        let schoolUid = body && body.schoolUid;
        callback(null, schoolUid);
        if (schoolUid) {
          redisUtil.set(key, schoolUid);
        }
      })
    }
  })
};

let updateYibanSchoolIdCache = (schoolUid, schoolConfig, callback) => {
  redisUtil.keys(config.dev.redis.prefix + getYibanSchoolIdKey('*'), (err, keys) => {
    if (err) {
      return callback(err);
    }
    async.each(keys, (key, next) => {
      key = key.replace(config.dev.redis.prefix, '');
      redisUtil.get(key, (err, reply) => {
        if (err) {
          err.context = { key };
          logger.warn(err);
        }
        console.log(key, reply, schoolUid)
        if (reply) {
          if (reply === schoolUid) {
            redisUtil.del(key)
          }
        }
        next()
      })
    }, err => {
      if (err) {
        return callback(err);
      }
      if (schoolConfig.yibanSchoolId) {
        logger.debug('[school] set yiban schoolId cache', schoolConfig.yibanSchoolId , schoolUid);
        redisUtil.set(getYibanSchoolIdKey(schoolConfig.yibanSchoolId), schoolUid);
      }
      callback()
    })
  })

}

let getSchoolConfigCacheKey = (schoolUid) => {
  return SCHOOL_CONFIG_REDIS_KEY_PREFIX + schoolUid;
};

let getYibanSchoolIdKey = (yibanSchoolId) => {
  return SCHOOL_YIBAN_REDIS_KEY_PREFIX + yibanSchoolId;
}

let getSchoolConfigFromOfficial = (schoolUid, callback) => {
  officialUtil.getSchoolConfigByUid(schoolUid, callback);
};

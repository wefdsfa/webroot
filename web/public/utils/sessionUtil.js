const uuid = require('node-uuid');

const config = require('../config');

const cryptionUtil = require('./cryptionUtil');
const redisUtil = require('./redisUtil');
const logger = require('../utils/loggerFactory').getLogger(__filename);

const USER_COOKIE_NAME = config.dev.session.cookieName;
const SESSION_EXPIRE = config.dev.session.expire;
const autoRefreshSession = config.dev.session.autoRefreshSessionEachVisit;
const BACKEND_COOKIE_NAME = config.dev.session.backendCookieName;
const SCHOOL_ID_COOKIE_NAME = config.dev.session.schoolIdCookieName;
const IDENTIFICATION_COOKIE_NAME_PREFIX = 'SAAS_IDENTIFICATION_';
const EMPLOYMENT_COOKIE_NAME_PREFIX = 'SAAS_EMPLOYMENT_';
const APP_REDIRECT_COOKIE_NAME = 'SAAS_APP_REDIRECT';
const ENROLL_COOKIE_NAME_PREFIX = 'SAAS_ENROLL_'
const AUTO_REDIRECT_COOKIE_NAME = 'SAAS_AUTO_REDIRECT';

exports.getAutoRedirectCookie = (req, res) => {
  let cookieValue = getCookieValue(req, AUTO_REDIRECT_COOKIE_NAME);
  if (!cookieValue) {
    return cookieValue;
  }
  return decodeURIComponent(cookieValue);
}

exports.setAutoRedirectCookie = (req, res, location) => {
  setCookie(res, AUTO_REDIRECT_COOKIE_NAME, encodeURIComponent(location), 0);
}

exports.clearAutoRedirectCookie = (req, res) => {
  res.clearCookie(AUTO_REDIRECT_COOKIE_NAME);
}

exports.getAppRedirectCookie = (req, res) => {
  return getCookieValue(req, APP_REDIRECT_COOKIE_NAME);
}

exports.setAppRedirectCookie = (req, res, appId) => {
  setCookie(res, APP_REDIRECT_COOKIE_NAME, appId, 0);
}

exports.clearAppRedirectCookie = (req, res) => {
  res.clearCookie(APP_REDIRECT_COOKIE_NAME);
}

exports.getIdentificationCookie = (req, res, schoolId) => {
  return getCookieValue(req, IDENTIFICATION_COOKIE_NAME_PREFIX + schoolId);
}

exports.setIdentificationCookie = (req, res, schoolId) => {
  setCookie(res, IDENTIFICATION_COOKIE_NAME_PREFIX + schoolId, schoolId, 0);
}

exports.clearIdentificationCookie = (req, res, schoolId) => {
  res.clearCookie(IDENTIFICATION_COOKIE_NAME_PREFIX + schoolId);
}

exports.getEmploymentCookie = (req, res, schoolId) => {
  return getCookieValue(req, EMPLOYMENT_COOKIE_NAME_PREFIX + schoolId);
}

exports.setEmploymentCookie = (req, res, schoolId) => {
  setCookie(res, EMPLOYMENT_COOKIE_NAME_PREFIX + schoolId, schoolId, 0);
}

exports.clearEmploymentCookie = (req, res, schoolId) => {
  res.clearCookie(EMPLOYMENT_COOKIE_NAME_PREFIX + schoolId);
}

exports.getSchoolIdFromCookie = (req) => {
  return getCookieValue(req, SCHOOL_ID_COOKIE_NAME);
}
exports.getEnrollCookie = (req, res, schoolId) => {
  return getCookieValue(req, ENROLL_COOKIE_NAME_PREFIX + schoolId);
}

exports.setEnrollCookie = (req, res, schoolId) => {
  setCookie(res, ENROLL_COOKIE_NAME_PREFIX + schoolId, schoolId, 0);
}

exports.clearEnrollCookie = (req, res, schoolId) => {
  res.clearCookie(ENROLL_COOKIE_NAME_PREFIX + schoolId);
}
//存储学校id的cookie
exports.saveSchoolIdCookie = (req, res, schoolId) => {
  setCookie(res, SCHOOL_ID_COOKIE_NAME, schoolId, 0);
}

exports.clearSchoolIdCookie = (req, res) => {
  res.clearCookie(SCHOOL_ID_COOKIE_NAME);
}
// 获取session
exports.getSession = (req, res, callback) => {
  let sessionId = getCookieValue(req, USER_COOKIE_NAME);
  if(!sessionId) {
    return callback();
  }

  const key = getRedisSessionKey(sessionId);
  //用key获取saveSession存储进去的value来获取session
  redisUtil.get(key, (err, reply) => {
    if(err) {
      return callback(err);
    }
    if(!reply) {
      return callback(null, reply);
    }
    try {
      reply = JSON.parse(reply);
    } catch(err) {
      err.context = {
        sessionId: sessionId,
        reply: reply
      };
      return callback(err);
    }

    if(autoRefreshSession) {
      redisUtil.expire(key, SESSION_EXPIRE);
      setCookie(res, USER_COOKIE_NAME, sessionId);
    }
    callback(null, reply);
  });
};

//制作并存储session
exports.saveSession = (req, res, user, sessionId) => {
  // 制作session(具体制作步骤忽略)
  sessionId = sessionId || createSessionId(req);
  const key = getRedisSessionKey(sessionId);
  // 以键值对key-value方式对session进行缓存
  redisUtil.set(key, JSON.stringify(user));
  //是指key的过期时间
  redisUtil.expire(key, SESSION_EXPIRE);
  // 设置cookie，并作为之后每次请求的cookie
  setCookie(res, USER_COOKIE_NAME, sessionId);
};
//销毁session
exports.destroySession = (req, res, sessionId) => {
  sessionId = sessionId || getCookieValue(req, USER_COOKIE_NAME);
  redisUtil.del(getRedisSessionKey(sessionId));
  res.clearCookie(USER_COOKIE_NAME);
  res.clearCookie(BACKEND_COOKIE_NAME);
};

exports.encryptTicket = (ticket) => {
  return cryptionUtil.sha1('w' + ticket + 'c')
}

let getRedisSessionKey = (sessionId) => {
  return `session_${sessionId}`;
};

let getCookieValue = (req, key) => {
  return jsonlizedCookie(req)[key];
};

let jsonlizedCookie = (req) => {
  let cookies = {};
  req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
    let parts = Cookie.split('=');
    cookies[parts[0].trim()] = (parts[1] || '').trim();
  });
  return cookies;
}

let createSessionId = (req) => {
  const secret = 'hahahah';
  return cryptionUtil.sha256(req.headers['user-agent'] + req.headers.host + uuid.v4() + secret);
};

let setCookie = (res, key, value, expires) => {
  res.cookie(key, value, {
    httpOnly: true,
    expires: typeof expires === 'undefined' ? new Date(Date.now() + SESSION_EXPIRE * 1000) : expires
  });
};

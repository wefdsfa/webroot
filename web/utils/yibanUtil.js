const request = require('request');
const conf = require('../config');

const cryptionUtil = require('./cryptionUtil');

const appId = conf.dev.yiban.appId;
const appSite = conf.dev.yiban.appSite;

module.exports = {
  getAccessToken: (verifyRequest, ybUid, callback) => {
    let oauthInfo;
    let result = {
      accessToken: null,
      expireIn: Infinity,
      expireAt: 0
    };
    try {
      oauthInfo = decodeVerifyRequest(verifyRequest);
      oauthInfo = JSON.parse(oauthInfo);
    } catch (err) {

      getTokenInfo(ybUid, (err, tokenInfo) => {
        if(err) {
          return callback(err);
        }
        if(tokenInfo.status === '200') {
          result.expireAt = new Date(parseInt(tokenInfo.created_at) * 1000);
          result.expireIn = result.expireAt - new Date();
          result.accessToken = tokenInfo.access_token;
          if(result.expireIn <= 0) {
            result.accessToken = null;
          }
          callback(null, result);
        } else if(tokenInfo.status === '404') {
          return callback(null, result);
        } else {
          return callback(new Error(`${ tokenInfo.status } - ${ tokenInfo.info.msgCN }`))
        }
      });
      return;
    }
    if(oauthInfo.visit_oauth) {
      result.accessToken = oauthInfo.visit_oauth.access_token;
      result.expireAt = new Date(parseInt(oauthInfo.visit_oauth.token_expires) * 1000);
      result.expireIn = result.expireAt - new Date();
    }
    if(result.expireIn <= 0) {
      result.accessToken = null;
    }
    callback(null, result);
  },
  verifyMe: (accessToken, callback) => {
    request({
      url: `https://openapi.yiban.cn/user/verify_me?access_token=${ accessToken }`,
      method: 'GET'
    }, resDefaultHandler.bind({ callback }));
  },
  getRealMe: (accessToken, callback) => {
    request({
      url: `https://openapi.yiban.cn/user/real_me?access_token=${ accessToken }`,
      method: 'GET'
    }, resDefaultHandler.bind({ callback }));
  },
  revokeToken: (accessToken, callback) => {
    request.post(`https://openapi.yiban.cn/oauth/revoke_token`, {
      form: {
        client_id: appId,
        access_token: accessToken
      }
    }, resDefaultHandler.bind({ callback }));
  },
  getOauthUrl: () => {
    return `https://oauth.yiban.cn/code/html?client_id=${ appId }&redirect_uri=${ appSite }`
  }
};

let getTokenInfo = (ybUid, callback) => {
  request.post(`https://openapi.yiban.cn/oauth/token_info`, {
    form: {
      client_id: appId,
      yb_uid: ybUid
    }
  }, resDefaultHandler.bind({ callback }));
};

let decodeVerifyRequest = (data) => {
  let key = conf.dev.yiban.appSecret;
  let iv = conf.dev.yiban.appId;
  let decoded = cryptionUtil.decryptAES256CBC(data, key, iv, 'hex');
  decoded = decoded.replace(/7d7d0+/g, '7d7d');   // 去除最后的00000000000000
  decoded = new Buffer(decoded, 'hex').toString();
  return decoded;
};

let resDefaultHandler = function(err, res, body) {
  if(err) {
    return this.callback(err);
  }
  if (res.statusCode !== 200) {
    return this.callback(res);
  }
  if(typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      e.context = body;
      this.callback(e);
    }
  }
  this.callback(null, body);
};

const conf = require('../config');
const request = require('request');
const SUCCESS_CODE = '88888';
const API_SECRET = 'wK6VIad708ssnao31u0uGDOBEuMd';
module.exports = {
  getSchoolUidByYibanSchoolId: (yibanSchoolId, callback) => {
    request({
      url: `${ conf.dev.officialBackEndHost }/schools/yiban/${ yibanSchoolId }`,
      method: 'GET',
      headers: {
        'Authorization': API_SECRET
      }
    }, resDefaultHandler.bind({ callback }));
  },
  getManagersBySchoolUid: (uid, callback) => {
    request({
      url: `${ conf.dev.officialBackEndHost }/schools/${ uid }/admins`,
      method: 'GET',
      headers: {
        'Authorization': API_SECRET
      }
    }, resDefaultHandler.bind({ callback }));
  },
  getSchoolConfigByUid: (uid, callback) => {
    request({
      url: `${ conf.dev.officialBackEndHost }/schools/${ uid }/config?v=1.0`,
      method: 'GET',
      headers: {
        'Authorization': API_SECRET
      }
    }, resDefaultHandler.bind({ callback }));
  }
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
  if(body.code !== SUCCESS_CODE) {
    return this.callback(new Error(body.code));
  }
  this.callback(null, body.body);
};

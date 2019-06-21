'use strict'
const config = require('../config')
const request = require('request')
const querystring = require('querystring')
const logger = require('../utils/loggerFactory').getLogger(__filename)
const backendCode = require('./backendCode')

exports.requestBackend = function (option, callback) {
  option.url = config.dev.saasBackEndHost + option.url
  if (option.method.toLowerCase() === 'get' || option.method.toLowerCase() === 'delete') {
    let qs = querystring.stringify(option.body)
    let u1 = option.url.split('?')[0]
    option.url = u1 + '?' + qs
  }
  if (option.headers && option.headers['content-type'] && option.headers['content-type'].indexOf('application/x-www-form-urlencoded') >= 0) {
    request[option.method.toLowerCase()](option.url, {
      form: querystring.stringify(option.body),
      json: true,
      header: option.headers
    }, function (error, response, body) {
      let msg = backendCode.getCodeInfo(body, option.lang)
      if (body && (typeof body) !== 'string') {
        body.message = msg
      } else {
        body = {
          message: msg
        }
      }
      callback(error, response, body)
    })
  } else {
    request(option, function (error, response, body) {
      let msg = backendCode.getCodeInfo(body, option.lang)
      if (body && (typeof body) !== 'string') {
        body.message = msg
      } else {
        body = {
          message: msg
        }
      }
      callback(error, response, body)
    })
  }
}

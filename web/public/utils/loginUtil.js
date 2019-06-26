const request = require('request')
const url = require('url')
const async = require('async')
const xml2js = require('xml2js')
const config = require('../config')
const schoolUtil = require('../utils/schoolUtil')
const backendUtil = require('../utils/backendUtil')
const backendCode = require('../utils/backendCode')
const cryptionUtil = require('../utils/cryptionUtil')

const AUTHENTICATED_SUBJECT_TYPE_JSON = 'JSON'
const AUTHENTICATED_SUBJECT_TYPE_XML = 'XML'
const ADMIN_NAME = '管理员'
const TYPE_ADMIN = 'ADMIN'
const TYPE_FRESHMAN = 'FRESHMAN'
const moment = require('moment')
module.exports = {
  getConfig: (schoolUid, callback) => {
    schoolUtil.getSchoolLoginConfig(schoolUid, (err, loginConfig) => {
      if (err) {
        return callback(err)
      }
      let info = loginConfig

      if (loginConfig && loginConfig.casEnable) {
        let cas = new Cas(loginConfig, schoolUid)
        info.casLoginUrl = cas.getLoginUrl()
      }
      if (loginConfig && loginConfig.yibanLogin) {
        info.yibanLoginUrl = `https://oauth.yiban.cn/code/html?client_id=${loginConfig.yibanAppId || config.dev.yiban.appId}&redirect_uri=${loginConfig.yibanAppSite || config.dev.yiban.appSite}&state=STATE`
      }
      callback(null, info)
    })
  },
  casValidate: (schoolUid, req, callback) => {
    schoolUtil.getSchoolLoginConfig(schoolUid, (err, loginConfig) => {
      if (err) {
        return callback(err, {})
      }
      let result = {
        userNo: null,
        ticket: null,
        logoutSessionTicket: null
      }
      result.logoutSessionTicket = req.query[loginConfig.casLogoutTicketParamName]
      if (result.logoutSessionTicket) {
        return callback(null, result)
      }
      result.ticket = req.query[loginConfig.casTicketParamName]
      let cas = new Cas(loginConfig)
      if (!result.ticket) {
        return callback(new Error('认证失败, ticket或logoutSessionKey为空: ' + req.originalUrl), result)
      }
      cas.servicePath = url.parse(req.originalUrl).pathname
      cas.validate(result.ticket, (err, userId) => {
        if (err) {
          return callback(err, result)
        }
        result.userNo = userId
        callback(null, result)
      })
    })
  },
  getLogoutUrl: (schoolUid, callback = function () {}) => {
    schoolUtil.getSchoolLoginConfig(schoolUid, (err, loginConfig) => {
      if (err) {
        return callback(err)
      }
      let cas = new Cas(loginConfig, schoolUid)
      callback(null, cas.getLogoutUrl())
    })
  },
  checkUserNo: (userNo, schoolUid, options = {}, callback) => {
    let message
    async.parallel({
      user: (done) => {
        let options = {
          url: `/users/${userNo}`,
          method: 'get',
          json: true,
          headers: {
            'content-type': 'application/json',
            'Authorization': `schoolId=${schoolUid}`
          }
        }
        backendUtil.requestBackend(options, (err, response, body) => {
          if (err) {
            return done(err)
          }
          if (!body || body.code !== backendCode.success) {
            if (body.code === backendCode.notFound) {
              message = `找不到此学工号： ${userNo}`
            } else {
              message = body.message || 'empty response body'
            }
            return done()
          }
          done(null, body.data)
        })
      },
      isAdmin: (done) => {
        schoolUtil.isSchoolManager(schoolUid, userNo, done)
      }
    }, (err, {
      user,
      isAdmin
    }) => {
      if (err) {
        return callback(err)
      }
      if (!user && !isAdmin) {
        return callback(new Error(message))
      }
      let session = {
        schoolId: schoolUid,
        isAdmin: isAdmin,
        yibanAccessToken: options.yibanAccessToken,
        cas: options.cas,
        testEnvId: options.testEnvId,
        testEnvName: options.testEnvName,
        qyh: options.qyh,
        qyhAuthUrl: options.qyhAuthUrl,
        time: new Date()
      }
      if (user) {
        session.userId = user.userId
        session.userNo = user.id
        session.name = user.name
        session.type = user.userType
      } else {
        session.userNo = userNo
        session.name = ADMIN_NAME
        session.type = TYPE_ADMIN
      }
      callback(null, session, user)
    })
  },
  getLoginSuccessRedirectUrl: (req, res, session, go) => {
    let redirect = '/'
    if (req.useragent.isMobile) {
      res.setHeader('Authorization', encodeURIComponent(JSON.stringify(session)))
      redirect = `/mobile`
      if (go === 'secondclass') {
        redirect = `/mobile?type=1&key=secondclass`
      }
    }
    return redirect
  },
  checkFreshmanAccount: (account, password, schoolUid, options, callback) => {
    let optionsToBackend = {
      url: `/users/freshman/${account}`,
      method: 'get',
      json: true,
      headers: {
        'content-type': 'application/json',
        'Authorization': `schoolId=${schoolUid}`
      }
    }
    backendUtil.requestBackend(optionsToBackend, (err, response, result) => {
      if (err) {
        return callback(err)
      }
      let message = ''
      if (!result || result.code !== backendCode.success) {
        if (result.code === backendCode.notFound) {
          message = '账号或密码有误'
        } else {
          message = result.message || 'empty response body'
        }
        return callback(new Error(message))
      }

      let userAccountInfo = result.data
      if (!userAccountInfo.userId) {
        message = '账号或密码有误'
        return callback(new Error(message))
      }
      let relPwd = userAccountInfo.password
      relPwd = cryptionUtil.md5(relPwd)
      if (relPwd !== password) {
        message = '账号或密码有误'
      }

      let loginEndTime = userAccountInfo.endTime
      if (moment().isAfter(moment(loginEndTime).endOf('days'))) {
        message = '新生账号已过期'
      }

      if (message) {
        return callback(new Error(message))
      }

      let session = {
        schoolId: schoolUid,
        yibanAccessToken: options.yibanAccessToken,
        cas: options.cas,
        testEnvId: options.testEnvId || '',
        testEnvName: options.testEnvName || '',
        time: new Date()
      }
      // session由后台返回数据拼接而成
      session.userId = userAccountInfo.userId
      session.userNo = userAccountInfo.id || ''
      session.name = userAccountInfo.name || ''
      session.type = TYPE_FRESHMAN
      callback(null, session, userAccountInfo)
    })
  },
  ixyLogin: (userNo, password, schoolUid, callback) => {
    let message
    async.parallel({
      user: (done) => {
        let optionsToBackend = {
          url: '/users/certifications',
          method: 'post',
          body: {
            userNo,
            password
          },
          json: true,
          headers: {
            'content-type': 'application/json',
            'Authorization': `schoolId=${schoolUid}`
          }
        }
        backendUtil.requestBackend(optionsToBackend, (err, response, result) => {
          if (err) {
            return callback(err)
          }
          if (!result || result.code !== backendCode.success) {
            message = result.message
            return done(new Error(message))
          }
          done(null, result.data)
        })
      },
      isAdmin: (done) => {
        schoolUtil.isSchoolManager(schoolUid, userNo, done)
      }
    }, (err, {
      user,
      isAdmin
    }) => {
      if (err) {
        return callback(err)
      }
      if (!user && !isAdmin) {
        return callback(new Error(message))
      }
      let session = {
        schoolId: schoolUid,
        isAdmin: isAdmin,
        yibanAccessToken: null,
        ixyLogin: true,
        cas: null,
        testEnvId: null,
        testEnvName: null,
        time: new Date()
      }
      if (user) {
        session.userId = user.userId
        session.userNo = user.id
        session.name = user.name
        session.type = user.userType
      } else {
        session.userNo = userNo
        session.name = ADMIN_NAME
        session.type = TYPE_ADMIN
      }
      callback(null, session, user)
    })
  },
  employmentLogin: (userMail,password,token, schoolUid,callback) => {    //就业系统单位登陆
    let message;
    let optionsToBackend;
    async.parallel({
      user: (done) => {
            optionsToBackend = {
              url: '/employment/certifications/loginCheck',
              method: 'post',
              body: {
                'userMail':userMail,
                'userPassword':password,
                'token':token//滑块token
              },
              json: true,
              headers: {
                'content-type': 'application/json',
                'Authorization': `schoolId=${ schoolUid };type=company`
              }
        }
        backendUtil.requestBackend(optionsToBackend, (err, response, result) => {
          if (err) {
            return callback(err)
          }
          if (!result || result.code !== backendCode.success) {
            message = result.message
            return done(new Error(message));
          }
          done(null, result.data)
        })
      },
        
    }, (err, {
      user,
    }) => {
      console.log(user)
      if (err) {
      
        return callback(err)
      }
      if (!user) {
        return callback(new Error(message))
      }
      let session = {
        schoolId: schoolUid,
        yibanAccessToken: null,
        ixyLogin: false,
        cas: null,
        testEnvId: null,
        testEnvName: null,
        time: new Date(),
        isCompanyLogin: 'company',
      }
      if (user) {
        session.userId = user.userId
        session.userNo = user.id
        session.name = user.name
        session.type = user.userType
        session.isCompanyLogin = 'company'
        session.userStatus = user.userStatus
        session.email = user.email
      } else {
        session.userNo = userNo
        session.name = ADMIN_NAME
        session.type = TYPE_ADMIN
      }
      console.log(session)
      callback(null, session, user)
    }) 
  },
  updateExternalAccount: (schoolId, externalAccount, callback) => {
    let optionsToBackend = {
      url: '/account/external',
      method: 'put',
      body: externalAccount,
      json: true,
      headers: {
        'content-type': 'application/json',
        'Authorization': `schoolId=${schoolId}`
      }
    }
    let message = ''
    backendUtil.requestBackend(optionsToBackend, (err, response, result) => {
      if (err) {
        return callback(err)
      }
      if (!result || result.code !== backendCode.success) {
        message = result.message
        return callback(new Error(message))
      }
      callback(null, result.data)
    })
  },
  getCookies: (cookies) => {
    let cookieJson = {}
    if (cookies) {
      let arrayCookie = cookies.split('; ')
      for (let c in arrayCookie) {
        let keyValue = arrayCookie[c].split('=')
        if (keyValue[0] && keyValue[1]) {
          cookieJson[keyValue[0]] = keyValue[1]
        }
      }
    }
    return cookieJson
  }
}

class Cas {
  constructor (casConfig, schoolId) {
    this.serverUrl = casConfig.casServerUrl
    this.loginPath = casConfig.casLoginPath
    this.validatePath = casConfig.casValidatePath
    this.logoutPath = casConfig.casLogoutPath
    this.serviceParamName = casConfig.casServiceParamName
    this.ticketParamName = casConfig.casTicketParamName
    this.authenticatedSubjectType = casConfig.casAuthenticatedSubjectType
    this.userIdKey = casConfig.casUserIdKey
    this.domain = config.dev.domain

    this.schoolId = schoolId
    this.localSchoolId = config.dev.local.schoolId
    this.isLocal = this.localSchoolId && this.localSchoolId === this.schoolId
    this.servicePath = this.isLocal ? '/login/cas' : ('/login/cas/' + schoolId)
  }
  getLoginUrl () {
    return `${this.serverUrl}${this.loginPath}?${this.serviceParamName}=${this._getSystemCasLoginUrl()}`
  }
  validate (ticket, callback) {
    request({
      url: `${this.serverUrl}${this.validatePath}?${this.serviceParamName}=${this._getSystemCasLoginUrl()}&${this.ticketParamName}=${ticket}`,
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        return callback(err)
      }
      if (res.statusCode !== 200) {
        return callback(res)
      }
      try {
        switch (this.authenticatedSubjectType) {
          case AUTHENTICATED_SUBJECT_TYPE_JSON:
            if (typeof body === 'string') {
              try {
                body = JSON.parse(body)
              } catch (err) {
                err.context = {
                  body
                }
                return callback(err)
              }
              callback(null, this._getValueFromJson(body))
            }
            break
          case AUTHENTICATED_SUBJECT_TYPE_XML:
            xml2js.parseString(body, {
              ignoreAttrs: true,
              explicitArray: false
            }, (err, result) => {
              if (err) {
                err.context = {
                  body
                }
                return callback(err)
              }
              callback(null, this._getValueFromJson(result))
            })
            break
          default:
            break
        }
      } catch (err) {
        callback(err)
      }
    })
  }
  getLogoutUrl () {
    return `${this.serverUrl}${this.logoutPath}?${this.serviceParamName}=${this._getSystemUrl()}`
  }
  _getValueFromJson (json) {
    let keys = this.userIdKey.split('.')
    keys.splice(0, 1)
    let tempValue = json
    for (let key of keys) {
      tempValue = tempValue[key]
    }
    return tempValue
  }
  _getSystemCasLoginUrl () {
    return encodeURI(`${this.domain}${this.servicePath}`)
  }
  _getSystemUrl () {
    if (this.isLocal) {
      return encodeURI(`${this.domain}/login`)
    }
    return encodeURI(`${this.domain}/${this.schoolId}/login`)
  }
}

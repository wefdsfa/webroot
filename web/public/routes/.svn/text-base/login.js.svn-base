const express = require('express')
const router = express.Router()
const async = require('async')
const config = require('../config')
const request = require('request')
const logger = require('../utils/loggerFactory').getLogger(__filename)
const schoolUtil = require('../utils/schoolUtil')
const loginUtil = require('../utils/loginUtil')
const yibanUtil = require('../utils/yibanUtil')
const sessionUtil = require('../utils/sessionUtil')
const backendUtil = require('../utils/backendUtil')
const cryptionUtil = require('../utils/cryptionUtil')
const backendCode = require('../utils/backendCode')

const ADMIN_NAME = '管理员'
const TYPE_ADMIN = 'ADMIN'
const SHORT_URL_KEY = 'saasshort666'

router.get('/gy/login/student', (req, res) => {
  let date = (new Date()).getTime()
  let code = cryptionUtil.md5('_w_' + req.user.userNo + '_o_' + date + '_c_')
  res.redirect(`${config.dev.gyUrl}/index.php/Home/Index/loginFromSaaS?sid=${req.user.userNo}&t=${date}&code=${code}&redirect=/Student/Freshman/index`)
})

router.get('/gy/login/admin', (req, res) => {
  let date = (new Date()).getTime()
  let code = cryptionUtil.md5('_w_' + req.user.userNo + '_o_' + date + '_c_')
  res.redirect(`${config.dev.gyUrl}/index.php/Home/Index/loginFromSaaS?sid=${req.user.userNo}&t=${date}&code=${code}&redirect=/Admin/Index/index`)
})

/**
 * TODO 重构 改为从官方平台获取企业号登录配置
 */
router.get('/login/qyhauth/:schoolId', (req, res) => {
  const { code } = req.query
  const { schoolId } = req.params
  if (!code || !schoolId) {
    logger.warn('链接无效：', req.originalUrl)
    return res.tip('链接无效')
  }
  request({
    url: `http://webapps.zjweu.edu.cn:7071/qyh/api/gettoken.php?hand=xuegong`,
    method: 'GET'
  }, (err, response, body) => {
    if (err) {
      logger.error('error while get qyh access token')
      logger.error(err)
      return res.tip('身份授权服务开小差啦，请稍候再试')
    }
    if (response.statusCode !== 200) {
      logger.error('error while get qyh access token')
      logger.error('status code:', res.statusCode)
      return res.tip('身份授权服务开小差啦，请稍候再试')
    }
    const accessToken = body
    request({
      url: `https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${accessToken}&code=${code}`,
      method: 'GET'
    }, (err, response, body) => {
      if (err) {
        logger.error('error while get qyh user info')
        logger.error(err)
        return res.tip('身份授权服务开小差啦，请稍候再试')
      }
      if (response.statusCode !== 200) {
        logger.error('error while get qyh user info')
        logger.error('status code:', res.statusCode)
        return res.tip('身份授权服务开小差啦，请稍候再试')
      }
      let userInfo = {}
      try {
        userInfo = JSON.parse(body)
      } catch (err) {
        logger.error('parse error while parse getuserinfo body:', body)
        logger.error(err)
      }
      if (userInfo.errcode == 40029) {
        return res.tip('认证链接失效，重新打开链接')
      }
      const userNo = userInfo.UserId
      if (!userNo) {
        return res.tip('您未绑定学工号')
      }
      const corpId = 'wx6f081801c63489c4'
      const redirectUrl = encodeURIComponent('http://ixy.zjweu.edu.cn:8080/login/qyhauth/' + schoolId)
      const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${corpId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_base&agentid=&state=XUEGONG#wechat_redirect`
      loginUtil.checkUserNo(userNo, schoolId, { qyh: true, qyhAuthUrl: authUrl }, (err, session, user) => {
        if (err) {
          return res.tip(err)
        }
        sessionUtil.saveSchoolIdCookie(req, res, schoolId)
        sessionUtil.saveSession(req, res, session)
        let cookieJson = loginUtil.getCookies(req.headers.cookie) || {}
        if (cookieJson.sk) {
          analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
            res.cookie('sk', '')
            if (error) {
              logger.error(error)
            }
            res.tip(ret.message, ret.success && 'success')
          })
        } else {
          if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
            return authorizeAndRedirectToOfficial(req, res, schoolId, user)
          }
          if (sessionUtil.getAppRedirectCookie(req, res)) {
            return redirectToApp(req, res)
          }
          if (sessionUtil.getAutoRedirectCookie(req, res)) {
            const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
            sessionUtil.clearAutoRedirectCookie(req, res)
            return res.redirect(decodeURIComponent(redirectUrl))
          }
          res.redirect(loginUtil.getLoginSuccessRedirectUrl(req, res, session))
        }
      })
    })
  })
})

router.get('/', (req, res, next) => {
  if (!req.user) {
    return next()
  }
  sessionUtil.clearEmploymentCookie(req, res, req.schoolId)
  sessionUtil.clearEnrollCookie(req, res, req.schoolId)
  if (req.useragent.isMobile) {
    res.redirect('/mobile')
  } else {
    next()
  }
})

router.get('/index', (req, res, next) => {
  if (!req.user) {
    return next()
  }
  sessionUtil.clearEmploymentCookie(req, res, req.schoolId)
  sessionUtil.clearEnrollCookie(req, res, req.schoolId)
  if (req.useragent.isMobile) {
    res.redirect('/mobile')
  } else {
    next()
  }
})

router.get('/app/:appId', (req, res, next) => {
  if (req.user) {
    return next()
  }
  const { appId } = req.params
  if (req.schoolId) {
    res.redirect('/' + req.schoolId + '/app/' + appId)
  } else {
    res.tip('登录超时')
  }
})

router.get('/:schoolId/app/:appId', (req, res, next) => {
  const { schoolId, appId } = req.params
  if (['mobile', 'api', 'downloads', 'upload'].indexOf(schoolId) >= 0) {
    return next()
  }
  sessionUtil.saveSchoolIdCookie(req, res, schoolId)
  if (!req.user) {
    schoolUtil.getConfig(schoolId, (err, schoolConfig) => {
      if (err) {
        return res.tip(err)
      }
      if (schoolConfig.login.casFirstWhenLogin) {
        sessionUtil.setAppRedirectCookie(req, res, appId)
        loginUtil.getConfig(schoolId, (err, loginConfig) => {
          if (err) {
            return res.jsonTip(err)
          }
          res.redirect(loginConfig.casLoginUrl)
        })
      } else {
        return res.redirect('/' + schoolId + '/login?app=' + appId)
      }
    })
  } else {
    if (req.useragent.isMobile) {
      res.redirect('/mobile/app/' + appId)
    } else {
      res.redirect('/app/' + appId)
    }
  }
})

const specSchoolLoginPreprocess = (req, res, next) => {
  const {
    schoolId
  } = req.params
  const {
    identification, app
  } = req.query
  if (identification) {
    sessionUtil.setIdentificationCookie(req, res, schoolId)
  } else {
    sessionUtil.clearIdentificationCookie(req, res, schoolId)
  }
  if (app) {
    sessionUtil.setAppRedirectCookie(req, res, app)
  } else {
    sessionUtil.clearAppRedirectCookie(req, res)
  }
  if (req.localSchoolId && schoolId !== req.localSchoolId) {
    return res.tip('页面未找到')
  }
  schoolUtil.isSchoolIdValid(schoolId, (err, valid) => {
    if (err || !valid) {
      return res.tip('页面未找到')
    }
    sessionUtil.saveSchoolIdCookie(req, res, schoolId)
    next()
  })
}

router.get('/:schoolId/login', specSchoolLoginPreprocess, (req, res, next) => {
  sessionUtil.clearEmploymentCookie(req, res, req.params.schoolId)
  sessionUtil.clearEnrollCookie(req, res, req.params.schoolId)
  next()
})
router.get('/:schoolId/login', specSchoolLoginPreprocess, (req, res, next) => {
  sessionUtil.clearEmploymentCookie(req, res, req.params.schoolId)
   if(req.query.sys == 'enroll'){
    sessionUtil.setEnrollCookie(req, res, req.params.schoolId)
  }
  else{
    sessionUtil.clearEnrollCookie(req, res, req.params.schoolId)
  }
  next()
})
// router.get('/:schoolId/login', specSchoolLoginPreprocess, (req, res, next) => {
 
//   next()
// })
router.get('/:schoolId/login/employment', specSchoolLoginPreprocess, (req, res, next) => {
  sessionUtil.setEmploymentCookie(req, res, req.params.schoolId)
  next()
})
router.get('/:schoolId/employment/index', specSchoolLoginPreprocess, (req, res, next) => {
  sessionUtil.setEmploymentCookie(req, res, req.params.schoolId)
  res.redirect('/employment/index')
})

/*
 * 登陆：易班账号授权登陆
 * TODO 多易班应用会有问题
 */
router.get('/certification/yiban', (req, res) => {
  let {
    yb_uid: ybUid,
    verify_request: verifyRequest
  } = req.query

  yibanUtil.getAccessToken(verifyRequest, ybUid, (err, accessTokenInfo) => {
    if (err) {
      err.context = {
        verifyRequest,
        ybUid
      }
      logger.warn(err)
      return res.tip('授权失败 - ' + err.message)
    }
    let accessToken = accessTokenInfo.accessToken
    if (!accessToken) {
      logger.warn('accessToken is invalid', accessTokenInfo)
      return res.redirect(yibanUtil.getOauthUrl())
    }
    // 这个接口速度比较慢 250ms左右
    yibanUtil.verifyMe(accessToken, (err, yibanCertification) => {
      if (err) {
        return res.tip(err)
      }
      if (yibanCertification.status !== 'success') {
        logger.warn(JSON.stringify(yibanCertification))
        yibanUtil.revokeToken(accessToken, (err, result) => {
          if (err) {
            err.context = {
              accessToken
            }
            logger.error(err)
          }
        })
        if (!yibanCertification.info) {
          return res.tip(JSON.stringify(yibanCertification))
        }
        if (yibanCertification.info.code === 'e024') {
          return res.tip('您还未完成校方认证')
        } else if (yibanCertification.info.code === 'e006') {
          return res.redirect(yibanUtil.getOauthUrl())
        } else {
          return res.tip(yibanCertification.info.msgCN)
        }
      }

      let certification = {
        yibanUserId: yibanCertification.info.yb_userid, // 易班用户id
        realName: yibanCertification.info.yb_realname,
        schoolId: yibanCertification.info.yb_schoolid, // 学校id（易班编码）
        schoolName: yibanCertification.info.yb_schoolname,
        collegeName: yibanCertification.info.yb_collegename,
        className: yibanCertification.info.yb_classname,
        enterYear: yibanCertification.info.yb_enteryear,
        studentId: yibanCertification.info.yb_studentid,
        examId: yibanCertification.info.yb_examid, // 准考证号
        admissionId: yibanCertification.info.yb_admissionid, // 录取通知编号
        employId: yibanCertification.info.yb_employid // 工号
      }

      schoolUtil.getSchoolUidByYibanSchoolId(certification.schoolId, (err, schoolUid) => {
        if (err) {
          return res.tip(err)
        }
        if (!schoolUid) {
          return res.tip(`Oops! 系统未接入${certification.schoolName}(${certification.schoolId})`)
        }
        schoolUtil.getConfig(schoolUid, (err, schoolConfig) => {
          if (err) {
            return res.tip(err)
          }
          async.parallel({
            userNo: (next) => {
              let userNo = certification.studentId || certification.employId
              if (userNo) {
                return next(null, userNo)
              }
              yibanUtil.getRealMe(accessToken, (err, result) => {
                if (err) {
                  return next(err)
                }
                if (result.status !== 'success') {
                  return next(JSON.stringify(result))
                }
                logger.warn(result)
                userNo = result.info.yb_studentid
                next(null, userNo)
              })
            }
          }, (err, { userNo }) => {
            if (err) {
              return res.tip(err)
            }
            if (!userNo) {
              logger.warn(JSON.stringify(yibanCertification))
              return res.tip('未能识别您的校方认证类型')
            }
            logger.info('yiban login:', schoolUid, userNo, accessToken)
            res.redirect(`${schoolConfig.host || ''}/certification/yiban/system?s=${schoolUid}&u=${userNo}&yu=${certification.yibanUserId}&a=${accessToken}&c=${yibanCertificationCode(schoolUid, userNo, accessToken)}`)
          })
        })
      })
    })
  })
})

/**
 * 登录：易班账号登录（From 易班账号授权登录）
 */

router.get('/certification/yiban/system', (req, res) => {
  // TODO accessToken 得加密一下，不然会有安全问题
  const { s: schoolId, u: userNo, yu: yibanUserId, a: accessToken, c: code } = req.query
  if (code !== yibanCertificationCode(schoolId, userNo, accessToken)) {
    return res.tip('链接无效')
  }
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}
  schoolUtil.isSchoolManager(schoolId, userNo, (err, isAdmin) => {
    if (err) {
      return res.tip(err)
    }
    let options = {
      url: `/users/${userNo}`,
      method: 'get',
      json: true,
      headers: {
        'content-type': 'application/json',
        'Authorization': `schoolId=${schoolId}`
      }
    }
    backendUtil.requestBackend(options, (err, response, body) => {
      if (err) {
        return res.tip(err)
      }
      let user
      if (!body || body.code !== backendCode.success) {
        let message = body.code === backendCode.notFound ? `找不到您的信息（No: ${userNo}）` : `Oops! ${body.message || 'empty response body'}`
        if (body.code === backendCode.notFound) {
          logger.warn(message)
        } else {
          logger.warn(JSON.stringify(body))
        }
        if (!isAdmin) {
          return res.tip(message)
        }
      } else {
        user = body.data
      }
      let session = {
        schoolId: schoolId,
        isAdmin: isAdmin,
        yibanAccessToken: accessToken,
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
      sessionUtil.saveSchoolIdCookie(req, res, schoolId)
      sessionUtil.saveSession(req, res, session)
      loginUtil.updateExternalAccount(schoolId, { userId: user.userId, yibanUserId, yibanAccessToken: accessToken }, (err) => {
        if (err) {
          return logger.error(err)
        }
        logger.info('更新yiban userId成功: ' + user.userId + ', ' + yibanUserId)
      })
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.tip(ret.message, ret.success && 'success')
        })
      } else {
        if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
          return authorizeAndRedirectToOfficial(req, res, schoolId, user)
        }
        if (sessionUtil.getAppRedirectCookie(req, res)) {
          return redirectToApp(req, res)
        }
        if (sessionUtil.getAutoRedirectCookie(req, res)) {
          const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
          sessionUtil.clearAutoRedirectCookie(req, res)
          return res.redirect(decodeURIComponent(redirectUrl))
        }
        let redirect = '/'
        if (req.useragent.isMobile) {
          res.setHeader('Authorization', encodeURIComponent(JSON.stringify(session)))
          redirect = `/mobile`
        }
        res.redirect(redirect)
      }
    })
  })
})

router.get('/logout', (req, res) => {
  let user = req.user
  if (!user) {
    return res.json({
      state: true
    })
  }
  if (sessionUtil.getEmploymentCookie(req, res, req.schoolId)) {
    sessionUtil.destroySession(req, res)
    return res.json({
      state: true
    })
  }
  if (sessionUtil.getEnrollCookie(req, res, req.schoolId)) {
    sessionUtil.destroySession(req, res)
    return res.json({
      state: true
    })
  }
  if (user.yibanAccessToken) {
    yibanUtil.revokeToken(user.yibanAccessToken, (err, result) => {
      if (err) {
        return res.tip(`Oops! ${err.message}`)
      }
      sessionUtil.destroySession(req, res)
      res.json({
        state: true
      })
    })
  } else if (user.cas) {
    loginUtil.getLogoutUrl(user.schoolId, (err, logoutUrl) => {
      if (err) {
        res.json({
          state: false,
          message: err.message
        })
      } else {
        sessionUtil.destroySession(req, res)
        res.json({
          state: true,
          redirect: logoutUrl
        })
      }
    })
  } else if (req.localSchoolId) {
    sessionUtil.destroySession(req, res)
    res.json({
      state: true,
      redirect: '/login'
    })
  } else if (user.qyh) {
    sessionUtil.destroySession(req, res)
    res.json({
      state: true,
      redirect: user.qyhAuthUrl
    })
  } else {
    sessionUtil.destroySession(req, res)
    res.json({
      state: true,
      testEnvId: user.testEnvId
    })
  }
})

router.get('/login/check', (req, res) => {
  res.json({
    state: true,
    data: {
      id: req.user.userId,
      userNo: req.user.userNo,
      name: req.user.name,
      type: req.user.type,
      loginType: req.user.ixyLogin ? 'ixy' : (req.user.cas ? 'cas' : 'other'),
      schoolId: req.user.schoolId,
      email: req.user.email
    }
  })
})

router.get('/system/config', (req, res) => {
  let schoolId = req.schoolId
  let sys = req.query.sys
  loginUtil.getConfig(schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (sys === 'employment') {
      sessionUtil.setEmploymentCookie(req, res, schoolId)
    }
    if (sys === 'enroll') {
      sessionUtil.setEnrollCookie(req, res, schoolId)
    }
    schoolUtil.getSchoolWebsiteName(schoolId, (err, websiteName, websiteNameEn) => {
      if (err) {
        return res.jsonTip(err)
      }
      return res.json({
        state: true,
        data: {
          cas: loginConfig.casLoginUrl,
          yiban: loginConfig.yibanLoginUrl,
          ixyLogin: loginConfig.ixyLogin,
          freshmenLogin: loginConfig.freshmenLogin,
          websiteName,
          websiteNameEn
        }
      })
    })
  })
})
/*
 * 登陆：统一身份认证登陆(学校本地)
 */
// CAS router: only local school
router.all('/login/cas', (req, res) => {
  let schoolId = req.localSchoolId
  // if(req.querybody.loginType) {
  //   let loginType = req.querybody.loginType
  // }
  if (!schoolId) {
    return res.tip('404 - 页面未找到')
  }
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}

  loginUtil.casValidate(schoolId, req, (err, { userNo, ticket, logoutSessionTicket }) => {
    if (err) {
      return res.tip(err)
    }
    if (logoutSessionTicket) {
      sessionUtil.destroySession(req, res, sessionUtil.encryptTicket(logoutSessionTicket))
      return res.end()
    }
    loginUtil.checkUserNo(userNo, schoolId, {
      cas: true
    }, (err, session, user) => {
      if (err) {
        return res.tip(err)
      }
      session.ticket = ticket
      // if(loginType) {
      //   session.loginType = loginType
      // }
      sessionUtil.saveSchoolIdCookie(req, res, schoolId)
      sessionUtil.saveSession(req, res, session, sessionUtil.encryptTicket(ticket))
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.tip(ret.message, ret.success && 'success')
        })
      } else {
        if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
          return authorizeAndRedirectToOfficial(req, res, schoolId, user)
        }
        if (sessionUtil.getEmploymentCookie(req, res, schoolId)) {
          return res.redirect('/employment/index')
        }
        // console.log("获取enrollcookie本地")
        if (sessionUtil.getEnrollCookie(req, res, schoolId)) {
          return res.redirect('/index?sys=enroll')
        }
        if (sessionUtil.getAppRedirectCookie(req, res)) {
          return redirectToApp(req, res)
        }
        if (sessionUtil.getAutoRedirectCookie(req, res)) {
          const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
          sessionUtil.clearAutoRedirectCookie(req, res)
          return res.redirect(decodeURIComponent(redirectUrl))
        }
        res.redirect(loginUtil.getLoginSuccessRedirectUrl(req, res, session))
      }
    })
  })
})

/*
 * 登陆：统一身份认证登陆(云)
 */
// CAS router: for multi schools
router.all('/login/cas/:schoolId', (req, res) => {
  let {
    schoolId
  } = req.params
  if (config.dev.local.schoolId && config.dev.local.schoolId !== schoolId) {
    return res.jsonTip('无效请求')
  }
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}
  loginUtil.casValidate(schoolId, req, (err, { userNo, ticket, logoutSessionTicket }) => {
    if (err) {
      return res.tip(err)
    }
    if (logoutSessionTicket) {
      sessionUtil.destroySession(req, res, sessionUtil.encryptTicket(logoutSessionTicket))
      return res.end()
    }
    loginUtil.checkUserNo(userNo, schoolId, {
      cas: true
    }, (err, session, user) => {
      if (err) {
        return res.tip(err)
      }
      session.ticket = ticket
      sessionUtil.saveSchoolIdCookie(req, res, schoolId)
      sessionUtil.saveSession(req, res, session, sessionUtil.encryptTicket(ticket))
      if (sessionUtil.getEmploymentCookie(req, res, schoolId)) {
        return res.redirect('/employment/index')
      }
      // console.log("获取enrollcookie云")
      if (sessionUtil.getEnrollCookie(req, res, schoolId)) {
        return res.redirect('/index?sys=enroll')
      }
      if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
        authorizeAndRedirectToOfficial(req, res, schoolId, user)
      } else if (sessionUtil.getAppRedirectCookie(req, res)) {
        return redirectToApp(req, res)
      } else if (sessionUtil.getAutoRedirectCookie(req, res)) {
        const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
        sessionUtil.clearAutoRedirectCookie(req, res)
        return res.redirect(decodeURIComponent(redirectUrl))
      } else if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.tip(ret.message, ret.success && 'success')
        })
      } else {
        res.redirect(loginUtil.getLoginSuccessRedirectUrl(req, res, session))
      }
    })
  })
})

/*
 * 登陆：统一身份认证登陆(云)、跳转应用
 */
// CAS router: direct to app page, only local school
router.all('/login/cas/:schoolId/app/:appId', (req, res) => {
  let {
    schoolId,
    appId
  } = req.params
  if (req.localSchoolId && schoolId !== req.localSchoolId) {
    return res.tip('404 - 页面没有找到')
  }
  if (!req.useragent.isMobile) {
    return res.tip('请在移动端打开本链接')
  }
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}
  loginUtil.casValidate(schoolId, req, (err, { userNo, ticket, logoutSessionTicket }) => {
    if (err) {
      return res.tip(err)
    }
    if (logoutSessionTicket) {
      sessionUtil.destroySession(req, res, sessionUtil.encryptTicket(logoutSessionTicket))
      return res.end()
    }
    loginUtil.checkUserNo(userNo, schoolId, {
      cas: true
    }, (err, session, user) => {
      if (err) {
        return res.tip(err)
      }
      session.ticket = ticket
      sessionUtil.saveSchoolIdCookie(req, res, schoolId)
      sessionUtil.saveSession(req, res, session, sessionUtil.encryptTicket(ticket))
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.tip(ret.message, ret.success && 'success')
        })
      } else {
        if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
          return authorizeAndRedirectToOfficial(req, res, schoolId, user)
        }
        if (sessionUtil.getAppRedirectCookie(req, res)) {
          return redirectToApp(req, res)
        }
        res.redirect('/mobile/app/' + appId)
      }
    })
  })
})

/*
 * 登陆：统一身份认证登陆(校本地)、跳转应用
 */
// CAS router: direct to app page, only local school
router.all('/login/cas/app/:appId', (req, res) => {
  if (!req.localSchoolId) {
    return res.tip('404 - 页面没有找到')
  }
  let {
    appId
  } = req.params
  if (!appId) {
    return res.tip('链接无效')
  }
  if (!req.useragent.isMobile) {
    return res.tip('请在移动端打开本链接')
  }
  let schoolId = req.localSchoolId
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}
  loginUtil.casValidate(schoolId, req, (err, { userNo, ticket, logoutSessionTicket }) => {
    if (err) {
      return res.tip(err)
    }
    if (logoutSessionTicket) {
      sessionUtil.destroySession(req, res, sessionUtil.encryptTicket(logoutSessionTicket))
      return res.end()
    }
    loginUtil.checkUserNo(userNo, schoolId, {
      cas: true
    }, (err, session, user) => {
      if (err) {
        return res.tip(err)
      }
      session.ticket = ticket
      sessionUtil.saveSchoolIdCookie(req, res, schoolId)
      sessionUtil.saveSession(req, res, session, sessionUtil.encryptTicket(ticket))
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.tip(ret.message, ret.success && 'success')
        })
      } else {
        if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
          return authorizeAndRedirectToOfficial(req, res, schoolId, user)
        }
        if (sessionUtil.getAppRedirectCookie(req, res)) {
          return redirectToApp(req, res)
        }
        res.redirect('/mobile/app/' + appId)
      }
    })
  })
})

// TODO 重构，放在localstorage
router.get('/system/name', (req, res) => {
  if (req.user) {
    schoolUtil.getSchoolWebsiteName(req.user.schoolId, (err, name) => {
      if (err) {
        return res.jsonTip(err)
      }
      res.json({
        state: true,
        data: name
      })
    })
  } else {
    res.json({
      state: true,
      date: null
    })
  }
})

/*
 * 登陆：新生登陆
 */
router.post('/certification/freshman', (req, res) => {
  let account = req.querybody.userNo
  let password = req.querybody.password

  let schoolId = req.schoolId
  loginUtil.getConfig(schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (!loginConfig.freshmenLogin) {
      return res.jsonTip(new Error('新生登录未开启'))
    }
    if (!account || !password) {
      return res.json({
        state: false,
        message: '账户密码不能为空'
      })
    }
    let cookie = req.headers.cookie
    let cookieJson = loginUtil.getCookies(cookie)
    loginUtil.checkFreshmanAccount(account, password, schoolId, {}, (err, session) => {
      if (err) {
        return res.jsonTip(err)
      }
      if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
        // TODO 缺少 userNo,grade,college
        return authorizeAndRedirectToOfficial(req, res, schoolId, session, true)
      }
      if (sessionUtil.getAppRedirectCookie(req, res)) {
        return redirectToApp(req, res)
      }
      if (sessionUtil.getAutoRedirectCookie(req, res)) {
        const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
        sessionUtil.clearAutoRedirectCookie(req, res)
        return res.redirect(decodeURIComponent(redirectUrl))
      }
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          if (error) {
            logger.error(error)
          }
          res.json({
            state: true,
            data: {
              redirect: '/tip?m=' + ret.message + '&t=' + (ret.success ? 'success' : 'info'),
              id: session.userId,
              name: session.name,
              type: session.type
            }
          })
        })
      } else {
        sessionUtil.saveSession(req, res, session)
        res.json({
          state: true,
          data: {
            redirect: loginUtil.getLoginSuccessRedirectUrl(req, res, session),
            id: session.userId,
            name: session.name,
            type: session.type
          }
        })
      }
    })
  })
})

/*
 * 登陆：学工平台登陆
 */
router.post('/users/certifications', (req, res) => {
  let userNo = req.querybody.userNo
  let password = req.querybody.password
  let schoolId = req.schoolId
  loginUtil.getConfig(schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (!loginConfig.ixyLogin) {
      return res.jsonTip(new Error('学工平台登录未开启'))
    }
    if (!userNo || !password) {
      return res.json({
        state: false,
        message: '帐号或密码不能为空'
      })
    }
    let cookie = req.headers.cookie
    let cookieJson = loginUtil.getCookies(cookie) || {}
    loginUtil.ixyLogin(userNo, password, schoolId, (err, session) => {
      if (err) {
        return res.jsonTip(err)
      }
      sessionUtil.saveSession(req, res, session)
      if (cookieJson.sk) {
        analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
          res.cookie('sk', '')
          if (error) {
            logger.error(error)
          }
          res.json({
            state: true,
            data: {
              redirect: '/tip?m=' + ret.message + '&t=' + (ret.success ? 'success' : 'info'),
              id: session.userId,
              name: session.name,
              type: session.type
            }
          })
        })
      } else {
        if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
          return authorizeAndRedirectToOfficial(req, res, schoolId, session, true)
        }
        if (sessionUtil.getAppRedirectCookie(req, res)) {
          return redirectToApp(req, res)
        }
        if (sessionUtil.getAutoRedirectCookie(req, res)) {
          const redirectUrl = sessionUtil.getAutoRedirectCookie(req, res)
          sessionUtil.clearAutoRedirectCookie(req, res)
          return res.redirect(decodeURIComponent(redirectUrl))
        }
        res.json({
          state: true,
          data: {
            redirect: loginUtil.getLoginSuccessRedirectUrl(req, res, session),
            id: session.userId,
            name: session.name,
            type: session.type
          }
        })
      }
    })
  })
})

// 就业系统  单位登录
router.post('/employment/certifications/loginCheck', (req, res) => {
  let userMail = req.querybody.userMail
  let userPassword = req.querybody.userPassword
  let token = req.querybody.token
  if (!userMail || !userPassword) {
    return res.json({
      state: false,
      message: '帐号或密码不能为空'
    })
  }
  let schoolId = req.schoolId
  let cookie = req.headers.cookie
  let cookieJson = loginUtil.getCookies(cookie) || {}
  loginUtil.employmentLogin(userMail, userPassword,token, schoolId, (err, session) => {
    if (err) {
      return res.jsonTip(err)
    }
    sessionUtil.saveSession(req, res, session)
    if (cookieJson.sk) {
      analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
        res.cookie('sk', '')
        if (error) {
          logger.error(error)
        }
        res.json({
          state: true,
          data: {
            redirect: '/tip?m=' + ret.message + '&t=' + (ret.success ? 'success' : 'info'),
            id: session.userId,
            name: session.name,
            type: session.type,
            email: session.email,
            userStatus: session.userStatus
          }
        })
      })
    } else {
      if (sessionUtil.getIdentificationCookie(req, res, schoolId)) {
        return authorizeAndRedirectToOfficial(req, res, schoolId, session, true)
      }
      if (sessionUtil.getAppRedirectCookie(req, res)) {
        return redirectToApp(req, res)
      }
      res.json({
        state: true,
        data: {
          redirect: loginUtil.getLoginSuccessRedirectUrl(req, res, session),
          id: session.userId,
          name: session.name,
          type: session.type,
          email: session.email,
          userStatus: session.userStatus
        }
      })
    }
  })
})

// for test school
router.all('/school/:id/*', (req, res, next) => {
  let {
    id
  } = req.params

  loginUtil.getConfig(id, (err, loginConfig) => {
    if (err) {
      return res.tip(err)
    }
    if (loginConfig && loginConfig.testLogin) {
      return next()
    }
    res.tip('无法访问该页面 :)')
  })
})

router.get('/school/:id', (req, res, next) => {
  let {
    id
  } = req.params
  loginUtil.getConfig(id, (err, loginConfig) => {
    if (err) {
      return res.tip(err)
    }
    if (loginConfig && loginConfig.testLogin) {
      sessionUtil.saveSchoolIdCookie(req, res, id)
      return next()
    }
    res.tip('无法访问该页面 :)', 'warning')
  })
})

router.get('/school/:id/name', (req, res) => {
  let schoolId = req.params.id
  schoolUtil.getSchoolWebsiteName(schoolId, (err, name) => {
    if (err) {
      return res.jsonTip(err)
    }
    res.json({
      state: true,
      data: name
    })
  })
})

router.post('/school/:id/login', (req, res) => {
  let schoolId = req.params.id
  let {
    password,
    userNo
  } = req.querybody
  loginUtil.getConfig(schoolId, (err, loginConfig) => {
    if (err) {
      return res.tip(err)
    }
    if (!loginConfig && loginConfig.testLogin) {
      res.jsonTip('登录失败 :)')
    }
    if (password !== cryptionUtil.md5(loginConfig.testLoginPassword)) {
      return res.json({
        state: false,
        message: '密码错误，请联系管理员'
      })
    }
    if (!userNo) {
      return res.json({
        state: false,
        message: '请填写学工号'
      })
    }
    let cookie = req.headers.cookie
    let cookieJson = loginUtil.getCookies(cookie) || {}
    schoolUtil.getSchoolWebsiteName(schoolId, (err, envName) => {
      if (err) {
        return res.jsonTip(err)
      }
      loginUtil.checkUserNo(userNo, schoolId, {
        testEnvId: schoolId,
        testEnvName: envName
      }, (err, session) => {
        if (err) {
          return res.jsonTip(err)
        }
        sessionUtil.saveSession(req, res, session)
        if (cookieJson.sk) {
          analysisShortUrl(cookieJson.sk, res, schoolId, session, function (error, ret) {
            res.cookie('sk', '')
            if (error) {
              logger.error(error)
            }
            res.json({
              state: true,
              data: {
                redirect: '/tip?m=' + ret.message + '&t=' + (ret.success ? 'success' : 'info'),
                id: session.userId,
                name: session.name,
                type: session.type
              }
            })
          })
        } else {
          res.json({
            state: true,
            data: {
              redirect: loginUtil.getLoginSuccessRedirectUrl(req, res, session),
              id: session.userId,
              name: session.name,
              type: session.type
            }
          })
        }
      })
    })
  })
})

/*
 * 登陆：厦大旧学工跳转新学工
 */
router.get('/certification/system', (req, res) => {
  let secret = req.querybody._id
  let key = '023fdd0b99830fa036c80f697a478308'
  let iv = '2624750004598718'
  let secretData = cryptionUtil.decryptAES256CBC(secret, key, iv, 'utf8')

  if (!secretData) {
    return res.json({
      state: false,
      message: '非法访问'
    })
  }
  let arrayData = secretData.split(',')
  if (!/^schoolId=.*$/.test(arrayData[0]) || !/^userNo=.*/.test(arrayData[1])) {
    return res.json({
      state: false,
      message: '非法访问'
    })
  }
  let schoolId = arrayData[0].split('=')[1]
  let userNo = arrayData[1].split('=')[1]
  loginUtil.checkUserNo(userNo, schoolId, {}, (err, session) => {
    if (err) {
      return res.jsonTip(err)
    }
    sessionUtil.saveSchoolIdCookie(req, res, schoolId)
    sessionUtil.saveSession(req, res, session)
    res.redirect(loginUtil.getLoginSuccessRedirectUrl(req, res, session))
  })
})

/*
 * 登陆：官方平台认证授权登陆
 */
router.get('/certification/official', (req, res) => {
  let {
    u, g
  } = req.query
  let userNoSchoolId = cryptionUtil.decryptAES192(u, 'sglj1j124123li4hlkuh1u2kl3h41lj')
  let [userNo, schoolId] = userNoSchoolId.split('_c_')
  loginUtil.checkUserNo(userNo, schoolId, {}, (err, session) => {
    if (err) {
      return res.tip(err)
    }
    sessionUtil.saveSchoolIdCookie(req, res, schoolId)
    sessionUtil.saveSession(req, res, session)
    res.redirect(loginUtil.getLoginSuccessRedirectUrl(req, res, session, g))
  })
})

let redirectToApp = function (req, res) {
  const appId = sessionUtil.getAppRedirectCookie(req, res)
  sessionUtil.clearAppRedirectCookie(req, res)
  if (req.useragent.isMobile) {
    res.redirect('/mobile/app/' + appId)
  } else {
    res.redirect('/app/' + appId)
  }
}

let authorizeAndRedirectToOfficial = function (req, res, schoolId, user, jsonLogin) {
  if (!user || !(user.id || user.userNo)) {
    return res.tip('请使用系统中存在的账号进行认证')
  }
  sessionUtil.clearIdentificationCookie(req, res, schoolId)
  let identification = {
    schoolId,
    userId: user.userId,
    userNo: user.userNo || user.id,
    name: user.name,
    account: user.account,
    grade: user.grade,
    college: user.college
  }
  async.waterfall([
    (next) => {
      if (!user.college) {
        return next(null, '无')
      }
      let options = {
        url: '/colleges',
        method: 'get',
        json: true,
        headers: {
          'content-type': 'application/json',
          'Authorization': `schoolId=${schoolId};`
        }
      }
      backendUtil.requestBackend(options, function (error, response, body) {
        if (error) {
          error.context = {
            options
          }
          return next(error)
        }
        if (body && body.code === backendCode.success) {
          for (let college of body.data) {
            if (college.code === user.college) {
              return next(null, college.name)
            }
          }
          next(null, '未知学院')
        } else {
          return next(new Error(body.message))
        }
      })
    }
  ], (err, collegeName) => {
    if (err) {
      return res.tip(err)
    }
    identification.college = collegeName
    let redirectUrl = config.dev.officialBackEndHost.replace('/official', '') + '/identification/create?u=' + cryptionUtil.encryptAES192(JSON.stringify(identification), 'sglj1j124123li4hlkuh1u2kl3h41lj')
    if (jsonLogin) {
      res.json({
        state: true,
        data: {
          redirect: redirectUrl,
          id: user.userId,
          name: user.name,
          type: user.userType
        }
      })
    } else {
      res.redirect(redirectUrl)
    }
  })
}

module.exports = router

function analysisShortUrl (sk, res, schoolId, session, callback) {
  let result = JSON.parse(cryptionUtil.decryptAES192(sk, SHORT_URL_KEY))
  let path = result.url
  let url = path.split('?')[0]
  let params = backendUtil.getParamsfromUrl(path)
  if (result.urlType === 'PAGE') {
    res.cookie('sk', '')
    return res.redirect(path)
  }
  if (result.urlType === 'API') {
    let options = {
      url: url,
      method: 'get',
      body: params,
      json: true,
      headers: {
        'content-type': 'application/json',
        'Authorization': `schoolId=${schoolId};userNo=${session.userNo};userId=${session.userId}`
      }
    }
    backendUtil.requestBackend(options, function (error, response, body) {
      if (error) {
        error.context = options

        logger.error(error)
        return callback(error)
      }
      res.cookie('sk', '')
      let ret = {
        'message': '',
        'data': {},
        'success': false
      }
      if (body && body.code === backendCode.success) {
        let successText = '成功'
        ret.message = (body && body.data && body.data.data && body.data.data.message) ? body.data.data.message : successText
        ret.success = successText === ret.message
        return callback(null, ret)
      }
      ret.message = (body && body.message) ? body.message : '访问失败'
      return callback(null, ret)
    })
  }
}

let yibanCertificationCode = (schoolId, userNo) => {
  return cryptionUtil.sha1(`hei_${schoolId}_${userNo}_a`)
}

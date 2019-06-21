const express = require('express')
const router = express.Router()
const loginUtil = require('../utils/loginUtil')

const localSchoolAuth = (req, res, next) => {
  if (req.localSchoolId) {
    return next()
  }
  res.tip('页面未找到', 'warning')
}


const schoolIdAuth = (req, res, next) => {
  if (req.schoolId) {
    return next()
  }
  res.tip('页面未找到', 'warning')
}
router.all('/employment/index', schoolIdAuth)
router.all('/enroll/index', schoolIdAuth)
router.all('/login', schoolIdAuth)
router.all('/login/employment', schoolIdAuth)

const ixyLoginAuth = (req, res, next) => {
  loginUtil.getConfig(req.schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (!loginConfig.ixyLogin) {
      return res.jsonTip(new Error('学工平台登录未启用, 请联系管理员开启'))
    }
    next()
  })
}
router.get('/table-data/users/certifications', ixyLoginAuth)
router.post('/users/certifications', ixyLoginAuth)
router.all('/upload/users/certifications/import/check', ixyLoginAuth)

const freshmenLoginAuth = (req, res, next) => {
  loginUtil.getConfig(req.schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (!loginConfig.freshmenLogin) {
      return res.jsonTip(new Error('新生登录未启用'))
    }
    next()
  })
}
router.post('/certification/freshman', freshmenLoginAuth)

const testLoginAuth = (req, res, next) => {
  loginUtil.getConfig(req.schoolId, (err, loginConfig) => {
    if (err) {
      return res.jsonTip(err)
    }
    if (!loginConfig.testLogin) {
      return res.jsonTip(new Error('拒绝访问'))
    }
    next()
  })
}
router.post('/school/:id/login', testLoginAuth)

module.exports = router

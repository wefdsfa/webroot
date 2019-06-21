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

// 就业系统首页
router.all('/employment/index', schoolIdAuth)
router.all('/login', schoolIdAuth)
router.all('/login/employment', schoolIdAuth)

// 录取查询页面
router.all('/enroll/enrollSearch', schoolIdAuth)
// 招生计划页面
router.all('/enroll/enrollPlan', schoolIdAuth)
// 历年分数页面
router.all('/enroll/yearScores', schoolIdAuth)
//招生行程页面
router.all('/enroll/enrollJourney', schoolIdAuth)
// 新生档案页面
router.all('/enroll/newStudentInfo', schoolIdAuth)
// 优秀意向生页面
router.all('/enroll/studentDirection', schoolIdAuth)
// 智能评估页面
router.all('/enroll/intelligentAssessment', schoolIdAuth)

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

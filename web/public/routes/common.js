const express = require('express')
const moment = require('moment')
const logger = require('../utils/loggerFactory').getLogger(__filename)
const backendUtil = require('../utils/backendUtil')
const backendCode = require('../utils/backendCode')
const schoolUtil = require('../utils/schoolUtil')
const timeUtil = require('../utils/timeUtil')

const router = express.Router()

router.all('/tip', (req, res) => {
  res.tip(req.query.message || req.query.m, req.query.type || req.query.t)
})

// router.all('/employment/*',(req, res, next)  => {
//   if(!req.user&&req.path != '/employment/login') {
//      if(req.path != '/employment/index'&&req.url != '/employment/certifications/loginCheck') {
//       return res.redirect('/employment/index')
//      }
//   }
//     return next()
// })


router.get('/employment',(req, res, next) => {
  if(!req.user) {
    return res.redirect('/employment/index')
  }
  return next()
})

router.get('/sc/report', (req, res) => {
  let { year, userId } = req.query
  const option = {
    url: userId ? `/sc/report/${userId}` : `/sc/report`,
    method: 'get',
    body: {
      year
    },
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.authorization
    }
  }
  schoolUtil.getConfig(req.schoolId, (err, schoolConfig) => {
    if (err) {
      return res.tip(err)
    }
    backendUtil.requestBackend(option, function (error, response, body) {
      if (error) {
        error.context = {
          option
        }
        logger.error(error)
        return res.tip('Opps! Something Wrong')
      }
      if (body && body.code === backendCode.success) {
        Object.assign(res.locals, { moment })
        res.render('second-class-report.html', { schoolName: schoolConfig.name, years: timeUtil.getYearsByGrade(body.data.student.grade), currentYear: year, isTimelineView: false, editable: true, stat: body.data })
      } else {
        logger.error('request backend get error:', option, body)
        return res.tip(body.message || 'Opps! Something Wrong')
      }
    })
  })
})

module.exports = router

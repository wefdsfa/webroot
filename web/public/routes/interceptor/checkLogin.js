const sessionUtil = require('../../utils/sessionUtil')
const schoolUtil = require('../../utils/schoolUtil')
const loginUtil = require('../../utils/loginUtil')

module.exports = (req, res, next) => {
  if (req.isOpenRoute) {
    return next()
  }

  if (!req.user) {
    sessionUtil.destroySession(req, res)
    if (req.xhr) {
      return res.json({
        state: false,
        message: '登录超时',
        unauthorized: true,
        schoolId: req.schoolId
      })
    } else {
      schoolUtil.getConfig(req.schoolId, (err, schoolConfig) => {
        if (err) {
          return res.tip(err)
        }
        loginUtil.getConfig(req.schoolId, (err, loginConfig) => {
          if (err) {
            return res.tip(err)
          }
          sessionUtil.setAutoRedirectCookie(req, res, req.originalUrl)
          if (req.schoolId && schoolConfig.login.casFirstWhenLogin) {
            return res.redirect(loginConfig.casLoginUrl)
          }
          if (req.localSchoolId) {
            sessionUtil.saveSchoolIdCookie(req, res, req.localSchoolId)
            return res.redirect(`/login`)
          }
          if (req.schoolId) {
            return res.redirect(`/${req.schoolId}/login`)
          }
          return res.tip('页面未找到')
        })
      })
    }
  } else {
    next()
  }
}

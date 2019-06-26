const sessionUtil = require('../../utils/sessionUtil')

module.exports = (req, res, next) => {
  sessionUtil.getSession(req, res, (err, session) => {
    if (err) {
      return res.tip(err)
    }
    req.user = session
    if (req.user) {
      req.authorization = `schoolId=${session.schoolId}`
      if (session.userNo) {
        req.authorization += `;userNo=${session.userNo}`
      }
      if (session.userId) {
        req.authorization += `;userId=${session.userId}`
      }
      if (session.isAdmin) {
        req.authorization += `;isAdmin=true`
      }
      if (session.isCompanyLogin == 'company') {
        req.authorization += `;type=${session.isCompanyLogin}`
      }else {
        req.authorization += `;type=${session.type}`
      }
    } else {
      req.authorization = `schoolId=${req.schoolId}`
    }
    next()
  })
}

const url = require('url')
const config = require('../../config')
const sessionUtil = require('../../utils/sessionUtil')

module.exports = (req, res, next) => {
  // 本地化部署
  req.localSchoolId = config.dev.local.schoolId
  req.schoolId = req.localSchoolId || sessionUtil.getSchoolIdFromCookie(req)
  req.querybody = (req.method === 'GET' || req.method === 'DELETE') ? req.query : req.body
  req.pathname = url.parse(req.originalUrl).pathname
  next()
}

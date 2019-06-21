const logger = require('../../utils/loggerFactory').getLogger(__filename)

module.exports = (req, res, next) => {

  // 防御点击劫持攻击
  res.header('X-Frame-Options', 'SAMEORIGIN');

  res.tip = (message, type, redirectUrl, redirectMsg = '立即跳转') => {
    if (message instanceof Error) {
      logger.error(message)
    }
    if (req.xhr) {
      return res.jsonTip(message)
    }
    message = typeof message === 'object' ? message.message : message
    res.render('tip.html', { message: message, type: type || 'info', redirectUrl, redirectMsg })
  }
  res.jsonTip = (message) => {
    message = typeof message === 'object' ? message.message : message
    res.json({
      state: false,
      message
    })
  }
  return next()
}

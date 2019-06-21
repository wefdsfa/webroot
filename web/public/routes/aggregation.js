const express = require('express')
const router = express.Router()
const backendUtil = require('../utils/backendUtil')
const backendCode = require('../utils/backendCode')

router.get('/aggregation/payment/ccb/check', (req, res) => {
  res.redirect(`http://purshell.cn:8083/order/order/create?studentNo=${req.user.userNo}&paymentCode=${req.query.code}`)
})

router.get('/aggregation/*', (req, res, next) => {
  let {
    id, item, type
  } = req.query
  if (!id) {
    req.paymentAuthorization = req.authorization
    return next()
  }
  let prefix = (!type || type === 'sid') ? 'users' : 'users/freshman'
  let options = {
    url: `/${prefix}/${id}`,
    method: 'get',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.paymentAuthorization || req.authorization
    }
  }
  backendUtil.requestBackend(options, (err, response, body) => {
    if (err) {
      return res.tip(err)
    }
    if (!body || body.code !== backendCode.success) {
      return res.tip('获取用户失败:', body.message)
    }
    if (!body.data || !body.data.userId) {
      return res.tip('invalid url')
    }
    req.paymentAuthorization = `schoolId=${req.user.schoolId};userId=${body.data.userId}`
    next()
  })
})

router.get('/aggregation/paymentUrl', (req, res) => {
  let { item } = req.query
  let option = {
    url: '/aggregation/paymentUrl',
    method: req.method,
    json: true,
    body: {
      item: item
    },
    headers: {
      'content-type': 'application/json',
      'Authorization': req.paymentAuthorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      return res.tip(error)
    }
    if (body && body.code === backendCode.success) {
      if (!body.data) {
        return res.tip('您没有需要支付的条目')
      }
      res.redirect(body.data)
    } else {
      res.tip((body && body.message) || '跳转失败')
    }
  })
})

router.get('/aggregation/removePayment', (req, res) => {
  let { item } = req.query
  let option = {
    url: '/aggregation/payment',
    method: 'DELETE',
    json: true,
    body: {
      item: item
    },
    headers: {
      'content-type': 'application/json',
      'Authorization': req.paymentAuthorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      return res.tip(error)
    }
    if (body && body.code === backendCode.success) {
      res.tip(body.data)
    } else {
      res.tip((body && body.message) || '未知错误')
    }
  })
})

module.exports = router

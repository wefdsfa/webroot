const express = require('express')
const config = require('../config')
const router = express.Router()
const extendRequest = require('./interceptor/extendRequest')
const extendResponse = require('./interceptor/extendResponse')
const handleSession = require('./interceptor/handleSession')
const checkOpenRoute = require('./interceptor/checkOpenRoute')
const checkLogin = require('./interceptor/checkLogin')

router.all('*', extendRequest)

router.all('*', extendResponse)

router.all('*', checkOpenRoute)

router.all('*', handleSession)

router.all('*', checkLogin)

router.all('/apply', (req, res) => {
  return res.redirect(config.dev.mobileHost + '/affairList')
})

module.exports = router

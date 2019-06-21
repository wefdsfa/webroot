const express = require('express')
const proxy = require('http-proxy-middleware')
const cls = require('continuation-local-storage')
const proxyAgent = require('./proxyAgent')

const router = express.Router()
const config = require('../config')
const logger = require('../utils/loggerFactory').getLogger(__filename)

router.all('/download/:id', (req, res) => {
  res.download('./static/' + req.params.id)
})

router.all('/upload/*', proxy({
  logProvider: () => logger,
  target: config.dev.saasBackEndHost,
  changeOrigin: true,
  agent: proxyAgent,
  pathRewrite: {
    '^/upload': ''
  },
  onProxyReq: function (proxyReq, req, res) {
    const requestStorage = cls.getNamespace('request')
    if (requestStorage) {
      proxyReq.setHeader('X-Request-Id', requestStorage.get('requestId'))
    }
    proxyReq.setHeader('Authorization', req.authorization)
  },
  onProxyRes: function (proxyRes, req, res) {
  }
}))
router.all('/downloads/*', proxy({
  logProvider: () => logger,
  target: config.dev.saasBackEndHost,
  changeOrigin: true,
  agent: proxyAgent,
  pathRewrite: {
    '^/downloads': ''
  },
  onProxyReq: function (proxyReq, req, res) {
    const requestStorage = cls.getNamespace('request')
    if (requestStorage) {
      proxyReq.setHeader('X-Request-Id', requestStorage.get('requestId'))
    }
    proxyReq.setHeader('Authorization', req.authorization)
  }
}))

router.all('/firstPage/images/*', proxy({
  logProvider: () => logger,
  target: config.dev.saasBackEndHost,
  changeOrigin: true,
  agent: proxyAgent,
  onProxyReq: function (proxyReq, req, res) {
    const requestStorage = cls.getNamespace('request')
    if (requestStorage) {
      proxyReq.setHeader('X-Request-Id', requestStorage.get('requestId'))
    }
    let authorization = {}
    req.headers.authorization && req.headers.authorization.split(';').forEach(function (part) {
      let parts = part.split('=')
      authorization[parts[0].trim()] = (parts[1] || '').trim()
    })
    proxyReq.setHeader('Authorization', 'schoolId=' + authorization.schoolId)
  }
}))

router.post('/firstPage/info', proxy({
  logProvider: () => logger,
  target: config.dev.saasBackEndHost,
  changeOrigin: true,
  agent: proxyAgent,
  onProxyReq: function (proxyReq, req, res) {
    const requestStorage = cls.getNamespace('request')
    if (requestStorage) {
      proxyReq.setHeader('X-Request-Id', requestStorage.get('requestId'))
    }
    let authorization = {}
    req.headers.authorization && req.headers.authorization.split(';').forEach(function (part) {
      let parts = part.split('=')
      authorization[parts[0].trim()] = (parts[1] || '').trim()
    })
    proxyReq.setHeader('Authorization', 'schoolId=' + authorization.schoolId)
  }
}))

module.exports = router

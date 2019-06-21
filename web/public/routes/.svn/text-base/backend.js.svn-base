const express = require('express')
const url = require('url')
const logger = require('../utils/loggerFactory').getLogger(__filename)
const backendUtil = require('../utils/backendUtil')
const backendCode = require('../utils/backendCode')
const router = express.Router()
const cryptionUtil = require('../utils/cryptionUtil')
const sessionUtil = require('../utils/sessionUtil')
const yibanUtil = require('../utils/yibanUtil')

/**
 * for ixy test
 */
router.all('/api/payment/orders', (req, res, next) => {
  if (req.schoolId !== 'ixy') {
    return next()
  }
  let ret = {}
  let param = req.querybody
  let option = {
    url: req.originalUrl.split('api')[1],
    method: req.method,
    json: true,
    body: param,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.authorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      error.context = {
        option
      }
      logger.error(error)
    }
    let payUrl = ''
    if (body && body.code === backendCode.success) {
      payUrl = body.data.qrCodePayUrl
    } else {
      logger.error('request backend get error:', option, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
      return res.json(ret)
    }
    let option2 = {
      url: '/payment/ccbpay/sign/verify/test' + url.parse(payUrl).search,
      method: 'post',
      json: true,
      headers: {
        'content-type': 'application/json',
        'Authorization': req.authorization
      }
    }
    backendUtil.requestBackend(option2, function (error, response, body) {
      if (error) {
        error.context = {
          option2
        }
        logger.error(error)
      }
      if (body && body.code === backendCode.success) {
        ret.data = {
          bankPayUrl: '/tip?m=缴费成功&t=success',
          qrCodePayUrl: '/tip?m=缴费成功&t=success',
          wechatPayUrl: '/tip?m=缴费成功&t=success'
        }
        ret.state = true
      } else {
        logger.error('request backend get error:', option2, body)
        ret = {
          state: false,
          message: (body && body.message) ? body.message : '接口访问失败',
          code: body.code
        }
      }
      res.json(ret)
    })
  })
})
router.all('/api/*', (req, res) => {
  let ret = {}
  let param = req.querybody
  let option = {
    url: req.originalUrl.split('api')[1],
    method: req.method,
    json: true,
    body: param,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.authorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      error.context = {
        option
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      ret.data = body.data
      ret.state = true
    } else {
      logger.error('request backend get error:', option, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
    }
    res.json(ret)
  })
})
router.all('/table-data/*', (req, res) => {
  let ret = {}
  let path = req.originalUrl.replace('/table-data/', '')
  let param = req.querybody
//   if (path.indexOf('tutor/') > -1 && param.pageIndex == 0) {
//     param.pageIndex = 1
//  }
  let options = {
    url: '/' + path + '/count',
    method: req.method,
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.authorization
    },
    body: param
  }
  for (let i in param.pageParams) {
    if (i !== 'pageParams') {
      options.body[i] = param.pageParams[i]
    }
  }
  // TODO 禁止使用delete
  delete options.body.pageParams
  options.url = '/' + path

//  console.log("path",path)
//  console.log("pageIndex",pageIndex)
  options.body.page = parseInt(param.pageIndex)
  options.body.size = param.pageSize

  backendUtil.requestBackend(options, function (error, response, body) {
    if (error) {
      error.context = {
        options
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      ret = {
        state: true,
        total: body.data ? body.data.totalElements : 0
      }
      ret.data = body.data ? body.data.content : []
    } else {
      logger.error('request backend get error:', options, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
    }
    res.json(ret)
  })
})

router.all('/tree-data/*', (req, res) => {
  let baseUrl = req.originalUrl.split('?')[0]
  let param = req.querybody
  let lang = param.lang ? param.lang : 'zh-cn'
  let ret = {
    data: []
  }
  let option = {
    url: req.originalUrl.split('tree-data')[1],
    method: req.method,
    json: true,
    body: param,
    headers: {
      'content-type': req.get('content-type'),
      'Authorization': req.authorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      error.context = {
        option
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      ret.data = getTree(body.data).children
      ret.state = true
    } else {
      logger.error('request backend get error:', option, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
    }
    res.json(ret)
  })

  function getTree (arr) {
    let jsonArr = {}
    let root = {
      children: []
    }
    let hasChild = false
    let hasErr = false
    if (baseUrl === '/tree-data/dict') {
      arr.forEach(function (ele, i) {
        if (lang === 'zh-cn') {
          ele.title = (ele.dict[lang] && ele.dict[lang].name) ? ele.dict[lang].name : ele.dict['en'].name
        } else {
          ele.title = (ele.dict[lang] && ele.dict[lang].name) ? ele.dict[lang].name : ele.dict['zh-cn'].name
        }
        ele.title += ' - ' + ele.id
      })
    }
    arr.forEach(function (ele, i) {
      ele.title = ele.title.replace(',', ' - ')
      jsonArr[ele.id] = ele
      if (ele.id === ele.pid) {
        logger.error('树节点数据出错,父节点与当前节点id相同!,节点id为' + ele.id)
        hasErr = true
      }
    })
    if (hasErr) {
      return root
    }
    while (true) {
      let isOk = true
      for (let key1 in jsonArr) {
        hasChild = false
        isOk = false
        for (let key2 in jsonArr) {
          if (jsonArr[key1].id === jsonArr[key2].pid) {
            hasChild = true
            break
          }
        }
        if (!hasChild) {
          if (jsonArr[jsonArr[key1].pid]) {
            if (!jsonArr[jsonArr[key1].pid].children) {
              jsonArr[jsonArr[key1].pid].children = []
            }
            jsonArr[jsonArr[key1].pid].children.push(jsonArr[key1])
          } else {
            root.children.push(jsonArr[key1])
          }
          delete jsonArr[key1]
        }
      }
      if (isOk) break
    }
    return root
  }
})
router.get('/Dict/:typeName', (req, res) => {
  let ret = {}
  let param = req.querybody
  let option = {
    url: '/dict?typeName=' + req.params.typeName,
    method: 'get',
    json: true,
    body: param,
    headers: {
      'content-type': req.get('content-type'),
      'Authorization': req.authorization
    }
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      error.context = {
        option
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      body.data.forEach(function (ele) {
        ele.name = (ele.dict[param.lang] && ele.dict[param.lang].name) ? ele.dict[param.lang].name : (ele.dict['zh-cn'] ? ele.dict['zh-cn'].name : ele.id)
      })
      ret.data = body.data
      ret.state = true
    } else {
      logger.error('request backend get error:', option, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
    }
    res.json(ret)
  })
})

router.all('/openapi/*', (req, res) => {
  let authorization = {}
  req.headers.authorization && req.headers.authorization.split(';').forEach(function (part) {
    let parts = part.split('=')
    authorization[parts[0].trim()] = (parts[1] || '').trim()
  })
  if (!authorization.token) {
    res.json({
      success: false,
      message: '非法访问'
    })
    return
  }
  cryptionUtil.privateDecrypt(authorization.token, function (err, resultCode) {
    if (err) {
      res.json({
        success: false,
        message: '非法访问'
      })
    }
    // 判断时间戳是否为+-60秒
    let now = new Date().valueOf()
    let code = Number(resultCode)
    let dTimeTemp = Number(now) - Number(code) > 0 ? Number(now) - Number(code) : (Number(now) - Number(code)) * -1
    let ret = {}
    if (dTimeTemp > 60000 * 30) {
      ret = {
        success: false,
        message: 'token无效'
      }
      res.json(ret)
      return
    }
    let param = req.querybody
    let option = {
      url: req.originalUrl.split('openapi')[1],
      method: req.method,
      json: true,
      body: param,
      headers: {
        'content-type': 'application/json',
        'Authorization': req.headers.authorization
      }
    }
    backendUtil.requestBackend(option, function (error, response, body) {
      if (error) {
        error.context = {
          option
        }
        logger.error(error)
      }
      if (body && body.code === backendCode.success) {
        ret.data = body.data
        ret.state = true
      } else {
        logger.error('request backend get error:', option, body)
        ret = {
          state: false,
          message: (body && body.message) ? body.message : '接口访问失败',
          code: body.code
        }
      }
      res.json(ret)
    })
  })
})

router.get('/firstPage/info', (req, res) => {
  let ret = {}
  let param = req.querybody
  let option = {
    url: req.originalUrl,
    method: req.method,
    json: true,
    body: param,
    headers: {
      'content-type': 'application/json',
      'Authorization': 'schoolId=' + req.schoolId
    }
  }
  if (!req.schoolId) {
    console.warn('req.schoolId is undefined')
    res.json({
      state: false,
      message: '请刷新页面'
    })
    return
  }
  backendUtil.requestBackend(option, function (error, response, body) {
    if (error) {
      error.context = {
        option
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      ret.data = body.data
      ret.state = true
    } else {
      logger.error('request backend get error:', option, body)
      ret = {
        state: false,
        message: (body && body.message) ? body.message : '接口访问失败',
        code: body.code
      }
    }
    res.json(ret)
  })
})

router.all('/s/:schoolId/:code', (req, res, next) => {
  let schoolId = req.params.schoolId
  let code = req.params.code
  let locationParam = req.querybody
  let options = {
    url: `/shortUrls/relUrl/${code}`,
    method: 'get',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': `schoolId=${schoolId}`
    }
  }
  backendUtil.requestBackend(options, function (error, response, body) {
    if (error) {
      error.context = {
        options
      }
      logger.error(error)
    }
    if (body && body.code === backendCode.success) {
      let result = body.data
      let url = result.url
      let isCheckLogin = result.isCheckLogin
      let secret = 'saasshort666'
      let encryptStr = cryptionUtil.encryptAES192(JSON.stringify(result), secret)
      res.setHeader('Set-Cookie', 'sk=' + encryptStr + ';path=/')
      if (isCheckLogin) {
        if (!req.schoolId || req.schoolId != schoolId) {
          if (req.useragent.source.indexOf('yiban') > -1) {
            return res.redirect(yibanUtil.getOauthUrl())
          }
          return res.redirect(`/${schoolId}/login`)
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
            if (req.useragent.source.indexOf('yiban') > -1) {
              return res.redirect(yibanUtil.getOauthUrl())
            }
            if (req.localSchoolId) {
              sessionUtil.saveSchoolIdCookie(req, res, req.localSchoolId)
              return res.redirect(`/login`)
            }
            if (req.schoolId) {
              return res.redirect(`/${req.schoolId}/login`)
            }
            return res.redirect('/tip?message=' + '请登录')
          }
        }
      }

      // 页面
      if (result.urlType == 'PAGE') {
        return res.redirect(url)
      }
      // 接口
      if (result.urlType == 'API') {
        let api = url.split('?')[0]
        let params = backendUtil.getParamsfromUrl(url)
        params = Object.assign(params, locationParam)
        let options = {
          url: api,
          method: 'get',
          body: params,
          json: true,
          headers: {
            'content-type': 'application/json',
            'Authorization': req.authorization
          }
        }
        backendUtil.requestBackend(options, function (error, response, body) {
          if (error) {
            error.context = {
              options
            }
            logger.error(error)
          }
          res.cookie('sk', '')
          if (body && body.code === backendCode.success) {
            // 签到
            // if (url.indexOf('/sc/activityProcesses/user/sign') != -1) {
            //   return res.tip('签到成功')
            // }

            if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
              return res.json(body)
            } else {
              return res.tip((body && body.data && body.data.data && body.data.data.message) ? body.data.data.message : '成功')
            }
          } else {
            if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
              return res.json(body)
            } else {
              return res.tip((body && body.message) ? body.message : '访问失败')
            }
          }
        })
      }
    } else {
      if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
        return res.json(body)
      } else {
        // if (body.message && body.message.indexOf(':') >= 0) {
        //   msg = body.message.split(':')[1]
        // }
        return res.tip((body && body.message) ? body.message : '访问失败')
      }
      // logger.error('request backend get error:', options, body)
      // res.tip((body && body.message) ? body.message : '接口访问失败')
    }
  })
})

router.post('/wjx/getScore', (req, res) => {
  let { totalvalue, sojumpparm } = req.body

  let [ code, schoolId ] = sojumpparm.split('_')
  if (!schoolId || !code) {
    console.error(req.body)
    return res.status(500).end()
  }

  let options = {
    url: `/shortUrls/relUrl/${code}`,
    method: 'get',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': `schoolId=${schoolId}`
    }
  }
  backendUtil.requestBackend(options, function (error, response, body) {
    if (error) {
      error.context = options
      console.error(error)
      return res.status(500).end()
    }
    if (body && body.code === backendCode.success) {
      let info = {}
      try {
        info = JSON.parse(body.data.url)
      } catch (err) {
        console.error(err)
        return res.status(500).end()
      }
      let options = {
        url: `/formEngine/system/formInstance/${info.instanceId}`,
        method: 'PUT',
        json: true,
        headers: {
          'content-type': 'application/json',
          'Authorization': `schoolId=${info.schoolId};userId=${info.userId};`
        },
        body: {
          playerId: 'owner',
          formData: [{
            name: info.scoreInputId,
            value: {
              floatValue: totalvalue
            }
          }, {
            name: info.statusId,
            value: {
              stringValue: decodeURI(info.statusValue)
            }
          }, {
            name: info.codeId,
            value: {
              stringValue: sojumpparm
            }
          }]
        }
      }
      backendUtil.requestBackend(options, function (error, response, body) {
        if (error) {
          error.context = options
          console.error(error)
          return res.status(500).end()
        }
        res.json({state: true})
      })
    } else {
      console.error((body && body.message) ? body.message : '访问失败')
      return res.status(500).end()
    }
  })
})

router.get('/:schoolId/payment/verify', (req, res) => {
  let { schoolId } = req.params
  if (req.query.SUCCESS === 'N') {
    return res.tip('支付失败')
  }
  if (req.query.SUCCESS !== 'Y') {
    return res.tip('无效链接', 'warning')
  }
  if (!req.user) {
    return res.tip('支付成功', 'success', '/' + schoolId + '/login', '返回缴费大厅')
  }
  res.tip('支付成功', 'success', '/', '返回缴费大厅')
})

router.post('/:schoolId/payment/verify', (req, res) => {
  let { schoolId } = req.params

  let options = {
    url: `/payment/ccbpay/sign/verify` + req.originalUrl.replace(req.pathname, ''),
    method: 'POST',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': `schoolId=${schoolId}`
    }
  }
  backendUtil.requestBackend(options, function (error, response, body) {
    if (error) {
      error.context = options
      console.error(error)
      return res.status(500).end()
    }
    if (body && body.code === backendCode.success) {
      res.json({state: true})
    } else {
      logger.error('request backend get error:', options, body)
      return res.status(500).end()
    }
  })
})

module.exports = router

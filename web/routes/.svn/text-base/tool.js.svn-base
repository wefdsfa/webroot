const express = require('express')
const router = express.Router()

const bankBin = require('../utils/bankBin')
const backendUtil = require('../utils/backendUtil')

router.get('/tool/bank/bin', (req, res) => {
  let { num: bankNumber } = req.querybody
  if (!bankNumber) {
    return res.jsonTip('invalid parameters')
  }
  let firstSixChar = bankNumber.substring(0, 6)
  let firstEightChar = bankNumber.substring(0, 6)
  let bankInfo = bankBin[firstSixChar] || bankBin[firstEightChar] || { name: '识别失败' }
  res.json({
    state: true,
    data: bankInfo.name
  })
})
router.post('/tool/form', (req, res) => {
  let {
    instantId,
    scoreInputId,
    statusId,
    statusValue,
    codeId
  } = req.querybody

  let options = {
    url: `/shortUrls/conversion`,
    method: 'get',
    json: true,
    headers: {
      'content-type': 'application/json',
      'Authorization': req.authorization
    },
    body: {
      url: JSON.stringify({ instanceId: instantId, scoreInputId, statusId, statusValue, codeId, userId: req.user.userId, schoolId: req.schoolId }),
      isCheckLogin: false,
      isTimeLimit: false,
      urlType: 'API'
    }
  }
  backendUtil.requestBackend(options, function (error, response, body) {
    if (error) {
      error.context = options
      console.error(error)
      return res.status(500).end()
    }
    res.json(`${body.data.split('/')[3]}_${req.schoolId}`)
  })
})

module.exports = router

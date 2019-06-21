const express = require('express')
const router = express.Router()

const schoolUtil = require('../utils/schoolUtil')

router.all('/official/heartbeat', (req, res) => {
  // TODO 各个组件健康检测
  res.end();
})

router.all('/official/:schoolId/config/update', (req, res) => {
  schoolUtil.updateSchoolCache(req.params.schoolId, (err) => {
    if (err) {
      return res.tip(err)
    }
    res.tip('更新成功')
  })
})

module.exports = router

const express = require('express')
const schoolUtil = require('../utils/schoolUtil')
const router = express.Router()

router.all('*', (req, res) => {
  if (!req.schoolId) {
    return res.render('index.html', {})
  }
  schoolUtil.getSchoolWebsiteName(req.schoolId, (err, websiteName, websiteNameEn) => {
    if (err) {
      return res.jsonTip(err)
    }
    res.render('index.html', {
      school: {
        websiteName, websiteNameEn
      }
    })
  })
})

module.exports = router

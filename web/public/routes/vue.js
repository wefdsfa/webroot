const express = require('express')
const router = express.Router()

router.all('*', (req, res) => {
  res.render('index.html', {})
})

module.exports = router

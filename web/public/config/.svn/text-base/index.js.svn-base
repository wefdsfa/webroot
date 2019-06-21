'use strict'
const merge = require('merge')
const fs = require('fs')
let prodConfig = require('./prod.env')
let testConfig = require('./test.env')
let devConfig = require('./dev.env')

const env = process.env.NODE_ENV

// default dev
let config = merge.recursive({}, devConfig)

if(env === 'test') {
  config = merge.recursive(config, testConfig)
} else if(env === 'production') {
  config = merge.recursive(config, prodConfig)
}

if (fs.existsSync('config/local.js')) {
  let localConfig = require('./local');
  config = merge.recursive(config, localConfig)
}

module.exports = config

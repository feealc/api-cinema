var express = require('express')
var mongoose = require('mongoose')
var bluebird = require('bluebird')
var router = require('./router.js')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')
 // --
var config = require('../config.js')
var cV = require('./validate/validate.controller.js').customValidators

//

const app = express()
const port = process.env.PORT || 4002

//

app
	.use(bodyParser.json())
	.use(expressValidator({customValidators: cV}))
	.use('/api/doc', express.static('doc'))
	.use('/api', router)

mongoose.Promise = bluebird

const mongoconect = config.database

mongoose.connect(mongoconect, (err) => {
  if (err) {
    return console.log('error on connect db')
  }
  app.listen(port, () => console.log(`${new Date} - localhost:${port}`))
})

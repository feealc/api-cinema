var mongoose = require('mongoose')
var gen = require('../generic/generic.controller.js')

//

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // auth: {
  //   type: Boolean,
  //   default: false,
  // },
  // token: {
  //   type: String,
  //   default: null,
  // },
  dt_criacao: {
    type: String,
    default: gen.getCurrentDate,
  }
})

module.exports = mongoose.model('usuarios', schema)


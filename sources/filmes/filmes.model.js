var mongoose = require('mongoose')
var gen = require('../generic/generic.controller.js')

//

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sinopse: {
    type: String,
    default: null,
  },
  diretor: {
    type: String,
    default: null,
  },
  elenco: {
    type: [String],
    default: null,
  },
  data_lancamento: { // ISO 8601
    type: String,
    default: null,
  },
  duracao: {
    type: Number,
    default: null,
  },
  genero: {
    type: [String],
    default: null,
  },
  rating: {
    type: Number,
    default: null,
  },
  pais: { // ISO 3166
    type: String,
    uppercase: true,
    default: null,
  },
  dt_criacao: {
    type: String,
    default: gen.getCurrentDate,
  },
  dt_ult_at: {
  	type: String,
  	default: null,
  }
})

module.exports = mongoose.model('filme', schema)


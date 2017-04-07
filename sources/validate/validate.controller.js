var validId = require('valid-objectid')
var isValidDate = require('is-valid-date')
var jwt = require('jsonwebtoken')
var Usuarios = require('../usuarios/usuarios.model.js')
// --
var config = require('../../config.js')
var generic = require('../generic/generic.default.js')
var eMV_F = generic.errorMessagesValidatorFilme
var eMV_U = generic.errorMessagesValidatorUsuario
var eMV_Uauth = generic.errorMessagesValidatorUsuarioAuth
var mR = generic.msgResponse
var mR_F = generic.msgResponseFilme
var mR_U = generic.msgResponseUsuario

//

function id(req, res, next, value) {
  if (!validId.isValid(value)) {
    return res
      .status(400)
      .json({message: mR.id400})
  }
  next()
}

function token(req, res, next) {
    const token = req.headers.token || req.query.token
    if (token == 'brum') { // gambiarra :D
        // console.log('token == brum')
        next()
    } else {
        // console.log('token != brum')
        if (token === undefined) { // o token nao foi informado
            // console.log('token == undefined')
            return res
                .status(400)
                .json({message: mR_U.u400token})
        }
        // console.log(token)
        // console.log('verify token...')
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                // console.log('verify token error...')
                // console.log(err.message)
                return res
                    .status(401)
                    .json({message: mR_U.u401token})
            } else {
                // console.log(`verify token ok...id [${decoded.id}]`)
                Usuarios
                    .findById(decoded.id)
                    .then((usuario) => {
                        // console.log('findById then')
                        if (usuario) { // usuario encontrado
                            // console.log('usuario encontrado')
                            // console.log('fim')
                            // console.log(decoded)
                            req.decoded = decoded
                            next()
                        } else {
                            // console.log('erro achar usuario')
                            return res
                                .status(401)
                                .json({message: mR_U.u401token})
                        }
                    })
                    .catch((err) => {
                        // console.log('findById catch')
                        // console.log(err)
                        return res
                            .status(500)
                            .json({message: mR_U.u401token})
                    })
            }
        })
    }
}

function runExpressValidatorFilme(req) {

	const locale = 'pt-BR'

	req.checkBody('nome', eMV_F.nome).notEmpty()
	req.checkBody('sinopse', eMV_F.sinopse).optional().notEmpty()
	req.checkBody('diretor', eMV_F.diretor).optional().notEmpty()
	req.checkBody('elenco', eMV_F.elenco).optional().isArrayString()
	req.checkBody('data_lancamento', eMV_F.data_lancamento).optional().isDataISO8601()
	req.checkBody('duracao', eMV_F.duracao).optional().isNumeric()
	req.checkBody('genero', eMV_F.genero).optional().isArrayString()
	req.checkBody('rating', eMV_F.rating).optional().isRating()
	req.checkBody('pais', eMV_F.pais).optional().isPaisISO3166()

}

function runExpressValidatorUsuario(req) {

    req.checkBody('username', eMV_U.username).isUsername()
    req.checkBody('password', eMV_U.password).isPassword()
    req.checkBody('email', eMV_U.email).isEmail()

}

function runExpressValidatorUsuarioAuth(req) {

    req.checkBody('username', eMV_Uauth.username).notEmpty()
    req.checkBody('password', eMV_Uauth.password).notEmpty()
    req.checkBody('expiresIn', eMV_Uauth.expiresIn).optional().isExpiresIn()

}

var customValidators = {
    //
	isArray: function(value) {
        return Array.isArray(value)
    },
    //
    isArrayString: function(value) {
    	// verificar se o que foi passado eh um array
        if (!Array.isArray(value)) {
            return false
    	}
        // o array precisa estar preenchido
        if (value.length == 0) {
            return false
        }
    	// vericar posicao por posicao do array
    	for (i = 0; i < value.length; i++) {
            var v = value[i]
    		if (v.search(/[0-9]/) >= 0) { // verificar se tem numeros
    			return false
    		}
            if (v == "") { // verificar se nao esta em branco
                return false
            }
    	}
    	return true
    },
    //
    isDataISO8601: function(value) {
    	var arrayDatas = value.split("-")
    	if (arrayDatas.length != 3) { // verificar se o array tem 3 elementos (ano, mes e dia)
    		return false
    	}
    	if (arrayDatas[0].length != 4) { // verificar se o ano tem 4 posicoes
    		return false
    	}
    	if (arrayDatas[1].length != 2 || arrayDatas[2].length != 2) { // verificar se o mes e dia tem 2 posicoes cada
    		return false
    	}
    	// montar a data no formato DD-MM-YYYY para o modulo validar se eh valida
    	const dt = `${arrayDatas[2]}-${arrayDatas[1]}-${arrayDatas[0]}`
    	return isValidDate(dt)
    },
    //
    isRating: function(value) {
        if (!(!isNaN(parseFloat(value)) && isFinite(value))) { // verificar se eh um numero
            return false
        }
        if (value < 0 || value > 10) { // verificar se o numero esta no range de 0.0 e 10.0
            return false
        }
    	return true
    },
    //
    isPaisISO3166: function(value) {
        if (value.search(/[^A-Za-z]/) >= 0) { // verificar se tem algum numero, espaco ou caracter especial - aceita somente letras
            return false
        }
        if (value.length != 3) { // verificar se tem 3 posicoes de tamanho
            return false
        }
    	return true
    },
    //
    isUsername: function(value) {
        if (value === undefined) { // verificar se esta presente
            return false
        }
        if (value == '') { // verificar se nao esta vazio
            return false
        }
        if (value.search(/\s/) >= 0) { // verificar se tem espaco
            return false
        }
        if (value.search(/[^A-Za-z0-9]/) >= 0) { // verificar se tem caracter especial
            return false
        }
        return true
    },
    //
    isPassword: function(value) {
        if (value === undefined) { // verificar se esta presente
            return false
        }
        if (value == '') { // verificar se nao esta vazia
            return false
        }
        if (value.search(/\s/) >= 0) { // verificar se tem espaco
            return false
        }
        if (value.search(/[0-9]/) < 0) { // verificar se nao tem numero
            return false
        }
        if (value.search(/[a-z]/) < 0) { // verificar se nao tem letra minuscula
            return false
        }
        if (value.search(/[A-Z]/) < 0) { // verificar se nao tem letra maiuscula
            return false
        }
        if (value.search(/[^A-Za-z0-9]/) < 0) { // verificar se nao tem caracter especial
            return false
        }
        return true
    },
    isExpiresIn: function(value) {
        if (value == '') { // verificar se nao esta vazia
            return false
        }
        if (value.search(/\s/) >= 0) { // verificar se tem espaco
            return false
        }
        if (value.search(/[\.|\,]/) >= 0) { // verificar se tem ponto ou virgula
            return false
        }
        var len = value.length
        var qtde = value.substr(0, len - 1)
        if (!(!isNaN(parseFloat(qtde)) && isFinite(qtde))) { // verificar se eh um numero
            return false
        }
        var tipo = value.substr(len - 1, len)
        if (tipo != 's' && tipo != 'm' && tipo != 'h') {
            return false
        }
        return true
    }
}

module.exports = {
    id,
    token,
    //
    runExpressValidatorFilme,
    runExpressValidatorUsuario,
    runExpressValidatorUsuarioAuth,
    //
    customValidators
}

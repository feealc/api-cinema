var express = require('express')
var validate = require('./validate/validate.controller.js')
var filmes = require('./filmes/filmes.controller.js')
var usuarios = require('./usuarios/usuarios.controller.js')

//

const router = express.Router()

// ================================================================================================
router
	.route('/usuarios')
	// .get(usuarios.getAll)
	.post(usuarios.createUser)

router
	.route('/usuarios/autenticar')
	.post(usuarios.authenticate)

router
	.route('/usuarios/apagartudo')
	.get(usuarios.delAll)

router
	.route('/filmes/apagartudo')
	.get(filmes.delAllFilmes)

// ================================================================================================
// a partir desse ponto eh necessario passar o token
router
	.use(validate.token)

router
	.route('/usuarios')
	.get(usuarios.getAllUsuarios)

router
	.route('/filmes')
	.get(filmes.getAllFilmes)
	.post(filmes.createFilme)

router
	.param('id', validate.id)

router
	.route('/filmes/:id')
	.get(filmes.getOneFilme)
	.put(filmes.updFullFilme)
	.patch(filmes.updParcialFilme)
	.delete(filmes.delFilme)

router
	.route('/usuarios/:id')
	.delete(usuarios.del)

module.exports = router

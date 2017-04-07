var Usuarios = require('./usuarios.model.js')
var validate = require('../validate/validate.controller.js')
var jwt = require('jsonwebtoken')
// --
var config = require('../../config.js')
var generic = require('../generic/generic.default.js')
var mR_U = generic.msgResponseUsuario

//

const noShowFields = '-__v'

module.exports = {
	getAllUsuarios,
	createUser,
	authenticate,
	del,
	delAll
}

//

/**
 * @api {get} /usuarios Recuperar as informações de todos os usuários cadastrados
 * @apiVersion 1.0.0
 * @apiName getAllUsuarios
 * @apiGroup Usuario
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 *
 * @apiUse UsuarioRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "XPTO",
 *       "username": "smithwill",
 *       "password": "banksfamily",
 *       "email": "thefreshprince@ofbelair.com",
 *       "dt_criacao": "2017-01-01"
 *     }]
 *
 * @apiUse TokenRetornoErro
 */
function getAllUsuarios(req, res) {

	Usuarios
		.find({}, noShowFields)
		.then((users) => {
			return res
				.status(200)
				.json(users)
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_U.u500all})
		})

}

/**
 * @api {post} /usuarios Criar novo usuário
 * @apiVersion 1.0.0
 * @apiName createUser
 * @apiGroup Usuario
 * @apiPermission Nenhuma
 *
 * @apiUse HeaderCType
 *
 * @apiUse UsuarioRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} ID O ID do usuário criado.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "message": "UsuarioCriado",
 *       "_id": "XPTO"
 *     }]
 *
 * @apiUse UsuarioRetornoErroValidacao
 */
function createUser(req, res) {

	validate.runExpressValidatorUsuario(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {
 			
 			const usuario = new Usuarios(req.body)
 			
 			usuario
				.save()
				.then((usuario) => {
					return res
						.status(201)
						.json({message: mR_U.u201, '_id': usuario._id})
				})
				.catch((err) => {
					if (err.code == 11000) { // duplicate key
						var em = err.errmsg
						// console.log(err.errmsg)
						if (em.search('username_1') >= 0) { // duplicate key - username
							return res
								.status(400)
								.json({message: mR_U.u400duplikeyU})
						}
						if (em.search('email_1') >= 0) { // duplicate key - email
							return res
								.status(400)
								.json({message: mR_U.u400duplikeyE})
						}
					} else {
						console.log(err)
					}
					return res
						.status(500)
						.json({message: mR_U.u500create})
				})
 		}
	})

}

/**
 * @api {post} /usuarios/autenticar Autenticar o usuário para gerar o token de acesso.
 * @apiVersion 1.0.0
 * @apiName authenticate
 * @apiGroup Usuario
 * @apiPermission Nenhuma
 *
 * @apiUse HeaderCType
 *
 * @apiUse UsuarioAuthRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} token Token de acesso gerado para o usuário.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "UsuarioAutenticado",
 *       "token": "efjaksfbkjafbakjfdsk.enenvjevhsbvshkvbk",
 *     }
 *
 * @apiUse UsuarioRetornoErroValidacaoAuth
 */
function authenticate(req, res) {

	validate.runExpressValidatorUsuarioAuth(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {

 			var username = req.body.username
			var password = req.body.password
			var expiresIn = req.body.expiresIn

			if (expiresIn === undefined) {
				expiresIn = '1h'
			}

			Usuarios
				.findOne({username, password})
				.then((usuario) => {
					if (usuario) {
						var id = usuario._id
						var tokenUsername = usuario.username
						var tokenEmail = usuario.email
						var token = jwt.sign({id, tokenUsername, tokenEmail}, config.secret, {
							expiresIn: expiresIn
						})
						return res
							.status(200)
							.json({message: mR_U.u200auth, token: token})
					} else {
						return res
							.status(404)
							.json({message: mR_U.u404})
					}
				})
				.catch((err) => {
					console.log(err)
					return res
						.status(500)
						.json({message: mR_U.u500auth})
				})
 		}
	})
}

/**
 * @api {delete} /usuarios/:id Apagar um usuário
 * @apiVersion 1.0.0
 * @apiName del
 * @apiGroup Usuario
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 *
 * @apiParam {String} id ID do usuário.
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "UsuarioApagado"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse UsuarioRetornoErro
 * @apiUse IDInvalidoErro
 */
function del(req, res) {

	const id = req.params.id

	Usuarios
		.findByIdAndRemove(id)
		.then((usuario) => {
			if (usuario) {
				return res
					.status(200)
					.json({message: mR_U.u200del})
			} else {
				return res
					.status(404)
					.json({message: mR_U.u404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: mR_U.u500del})
		})

}

// delAll
function delAll(req, res) {

	Usuarios
		.remove({})
		.then(() => {
			console.log('\n===== TODOS OS USUARIOS FORAM APAGADOS!!!! =====\n')
			return res
				.status(200)
				.json({message: 'TodosUsuariosApagados'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'ErroApagarTodosUsuarios'})
		})

}

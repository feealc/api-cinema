var Filmes = require('./filmes.model.js')
var gen = require('../generic/generic.controller.js')
var validate = require('../validate/validate.controller.js')
// --
var generic = require('../generic/generic.default.js')
var mR_F = generic.msgResponseFilme

//

const noShowFields = '-__v'

module.exports = {
	getAllFilmes,
	getOneFilme,
	createFilme,
	updFullFilme,
	updParcialFilme,
	delFilme,
	delAllFilmes
}

//

/**
 * @api {get} /filmes Recuperar as informações de todos os filmes cadastrados
 * @apiVersion 1.0.0
 * @apiName getAllFilmes
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 *
 * @apiUse FilmeRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "_id": "XYZ",
 *       "nome": "Titanic",
 *       "sinopse": "84 anos mais tarde, uma mulher de 101 anos chamada Rose DeWitt Bukater conta a história...",
 *       "diretor": "James Cameron",
 *       "elenco": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
 *       "data_lancamento": "1997-12-19",
 *       "duracao": "194",
 *       "genero": ["Drama", "Romance"],
 *       "rating": "7.7",
 *       "pais": "EUA",
 *       "dt_criacao": "2017-01-01",
 *       "dt_ult_at": "2017-01-02"
 *     }]
 *
 * @apiUse TokenRetornoErro
 */
function getAllFilmes(req, res) {

	Filmes
		.find({}, noShowFields)
		.then((filmes) => {
			return res
				.status(200)
				.json(filmes)
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_F.f500all})
		})

}

/**
 * @api {get} /filmes/:id Recuperar as informações de um filme cadastrado
 * @apiVersion 1.0.0
 * @apiName getOneFilme
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 *
 * @apiParam {String} id ID do filme.
 *
 * @apiUse FilmeRetornoSucesso
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nome": "Titanic",
 *       "sinopse": "84 anos mais tarde, uma mulher de 101 anos chamada Rose DeWitt Bukater conta a história...",
 *       "diretor": "James Cameron",
 *       "elenco": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
 *       "data_lancamento": "1997-12-19",
 *       "duracao": "194",
 *       "genero": ["Drama", "Romance"],
 *       "rating": "7.7",
 *       "pais": "EUA",
 *       "dt_criacao": "2017-01-01",
 *       "dt_ult_at": "2017-01-02"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse FilmeRetornoErro
 * @apiUse IDInvalidoErro
 */
function getOneFilme(req, res) {

	const id = req.params.id

	Filmes
		.findById(id, noShowFields)
		.then((filme) => {
			if (filme) {
				return res
					.status(200)
					.json(filme)
			} else {
				return res
					.status(404)
					.json({message: mR_F.f404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(500)
				.json({message: mR_F.f500one})
		})
}

/**
 * @api {post} /filmes Cadastrar um novo filme
 * @apiVersion 1.0.0
 * @apiName createFilme
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 * @apiUse HeaderCType
 *
 * @apiUse FilmeRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 * @apiSuccess {String} ID O ID do filme criado.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "FilmeCriado",
 *       "_id": "XXX"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse FilmeRetornoErroValidacao
 */
function createFilme(req, res) {

	validate.runExpressValidatorFilme(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {

 			return res
 				.status(400)
 				.json(result.array())
 		
 		} else {

 			const filme = new Filmes(req.body)
 			
 			filme
				.save()
				.then((filme) => {
					return res
						.status(201)
						.json({message: mR_F.f201, '_id': filme._id})
				})
				.catch((err) => {
					console.log(err)
					return res
						.status(500)
						.json({message: mR_F.f500create})
				})
 		}
	})
}

/**
 * @api {put} /filmes/:id Alterar todas as informações de um filme
 * @apiVersion 1.0.0
 * @apiDescription Este método altera a entidade inteira, mas mantém o mesmo ID do filme.
 * @apiName updFullFilme
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID do filme.
 *
 * @apiUse FilmeRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "FilmeAlterado"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse FilmeRetornoErroValidacao
 * @apiUse FilmeRetornoErro
 * @apiUse IDInvalidoErro
 */
function updFullFilme(req, res) { // put

	validate.runExpressValidatorFilme(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.params.id
			const novoFilme = new Filmes(req.body)

			Filmes
				.findById(id)
				.then((filme) => {

					if (filme) {

						filme.nome = novoFilme.nome
						filme.sinopse = novoFilme.sinopse
						filme.diretor = novoFilme.diretor
						filme.elenco = novoFilme.elenco
						filme.data_lancamento = novoFilme.data_lancamento
						filme.duracao = novoFilme.duracao
						filme.genero = novoFilme.genero
						filme.rating = novoFilme.rating
						filme.pais = novoFilme.pais
						// filme.dt_criacao
						filme.dt_ult_at = gen.getCurrentDate()
						
						filme
							.save()
							.then(() => {
								return res
									.status(200)
									.json({message: mR_F.f200upd})
							})
							.catch((err) => {
								console.log(err)
								return res
									.status(400)
									.json({message: mR_F.f400upd})
							})
					} else {
						return res
							.status(404)
							.json({message: mR_F.f404})
					}

				})
				.catch((err) => {
					console.log(err)
					return res
						.status(500)
						.json({message: mR_F.f500})
				})
 		}
	})
}

/**
 * @api {patch} /filmes/:id Alterar informações de um filmes
 * @apiVersion 1.0.0
 * @apiDescription Este método altera somente as propriedades da entidade que foram passadas no body e mantém o mesmo ID do filme.
 * @apiName updParcialFilme
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 * @apiUse HeaderCType
 *
 * @apiParam {String} id ID do filme.
 *
 * @apiUse FilmeRequisicaoBody
 *
 * @apiSuccess {String} message Mensagem de sucesso.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "FilmeAlterado"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse FilmeRetornoErroValidacao
 * @apiUse FilmeRetornoErro
 * @apiUse IDInvalidoErro
 */
function updParcialFilme(req, res) { // patch

	validate.runExpressValidatorFilme(req)

 	req.getValidationResult().then(function(result) {

 		if (!result.isEmpty()) {
 			
 			return res
 				.status(400)
 				.json(result.array())

 		} else {

 			const id = req.params.id

			Filmes
				.findById(id)
				.then((filme) => {

					if (filme) {

						filme.nome = req.body.nome || filme.nome
						filme.sinopse = req.body.sinopse || filme.sinopse
						filme.diretor = req.body.diretor || filme.diretor
						filme.elenco = req.body.elenco || filme.elenco
						filme.data_lancamento = req.body.data_lancamento || filme.data_lancamento
						filme.duracao = req.body.duracao || filme.duracao
						filme.genero = req.body.genero || filme.genero
						filme.rating = req.body.rating || filme.rating
						filme.pais = req.body.pais || filme.pais
						// filme.dt_criacao
						filme.dt_ult_at = gen.getCurrentDate()
						
						filme
							.save()
							.then(() => {
								return res
									.status(200)
									.json({message: mR_F.f200upd})
							})
							.catch((err) => {
								console.log(err)
								return res
									.status(400)
									.json({message: mR_F.f400upd})
							})

					} else {
						return res
							.status(404)
							.json({message: mR_F.f404})
					}

				})
				.catch(() => {
					return res
						.status(500)
						.json({message: mR_F.f500})
				})
 			
 		}
	})
}

/**
 * @api {delete} /filmes/:id Apagar um filme
 * @apiVersion 1.0.0
 * @apiName delFilme
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiUse HeaderToken
 *
 * @apiParam {String} id ID do filme.
 *
 * @apiSuccess {String} message Filme apagado.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "FilmeApagado"
 *     }
 *
 * @apiUse TokenRetornoErro
 * @apiUse FilmeRetornoErro
 * @apiUse IDInvalidoErro
 */
function delFilme(req, res) {

	const id = req.params.id

	Filmes
		.findByIdAndRemove(id)
		.then((filme) => {
			if (filme) {
				return res
					.status(200)
					.json({message: mR_F.f200del})
			} else {
				return res
					.status(404)
					.json({message: mR_F.f404})
			}
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: mR_F.f400del})
		})

}

/**
 * @apiIgnore
 * @api {get} /filmes Apagar todos os filmes
 * @apiName delAllFilmes
 * @apiGroup Filme
 * @apiPermission Usuários autenticados
 *
 * @apiHeader {String} Content-Type application/json
 * @apiHeader {String} token Token gerado para o usuário.
 *
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "token": "kfahfjasbebrvrsklvnsvndsjkvsvsv.faklfjejvbrkvbrsk"
 *     }
 *
 * @apiSuccess {String} message Todos os filmes apagados.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "TodosFilmesApagados"
 *     }
 */
function delAllFilmes(req, res) {

	Filmes
		.remove({})
		.then(() => {
			console.log('\n===== TODOS OS FILMES FORAM APAGADOS!!!! =====\n')
			return res
				.status(200)
				.json({message: 'TodosFilmesApagados'})
		})
		.catch((err) => {
			console.log(err)
			return res
				.status(400)
				.json({message: 'ErroApagarTodosFilmes'})
		})

}


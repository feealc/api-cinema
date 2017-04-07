
// ================================================================================================
// Requisicao - Body
// ================================================================================================

/**
 * @apiDefine FilmeRequisicaoBody
 *
 * @apiParam (Body) {String} nome Nome do filme.
 * @apiParam (Body) {String} sinopse Sinopse do filme.
 * @apiParam (Body) {String} [diretor] Nome do diretor.
 * @apiParam (Body) {String[]} [elenco] Nome dos atores/atrizes. Aceito somente letras nos nomes.
 * @apiParam (Body) {String} [data_lancamento] Data do lançamento (ISO 8601).
 * @apiParam (Body) {Number} [duracao] Duração do filme. Aceito somente números.
 * @apiParam (Body) {String[]} [genero] Gêneros do filme. Aceito somente letras.
 * @apiParam (Body) {Number} [rating] Avaliação do filme. Aceito somente números (Float).
 * @apiParam (Body) {String} [pais] País do filme (ISO 3166 alfa-3).
*/


// ================================================================================================
// Retorno - Sucesso
// ================================================================================================

/**
 * @apiDefine FilmeRetornoSucesso
 *
 * @apiSuccess {String} _id ID do filme.
 * @apiSuccess {String} nome Nome do filme.
 * @apiSuccess {String} sinopse Sinopse do filme.
 * @apiSuccess {String} diretor Nome do diretor.
 * @apiSuccess {String[]} elenco Nome dos atores/atrizes.
 * @apiSuccess {String} data_lancamento Data do lançamento (ISO 8601).
 * @apiSuccess {Number} duracao Duração do filme.
 * @apiSuccess {String[]} genero Gêneros do filme.
 * @apiSuccess {Number} rating Nota do filme.
 * @apiSuccess {String} pais Nome do país (ISO 3166 alfa-3).
 * @apiSuccess {String} dt_criacao Data de criação (ISO 8601).
 * @apiSuccess {String} dt_ult_at Data da última modificação (ISO 8601).
*/


// ================================================================================================
// Retorno - Erro
// ================================================================================================

/**
 * @apiDefine FilmeRetornoErroValidacao
 *
 * @apiError (Error 400 - Validação)  param Nome do parâmetro com erro.
 * @apiError (Error 400 - Validação)  msg Descrição do erro.
 * @apiError (Error 400 - Validação)  [value] Valor do parâmetro com erro.
 *
 * @apiErrorExample {json} ErroValidação:
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "rating",
 *       "msg": "O rating precisa ser um número entre 0.0 e 10.0",
 *       "value": "12.0"
 *     }]
 *
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "nome",
 *       "msg": "O nome é obrigatório"
 *     }]
*/

/**
 * @apiDefine FilmeRetornoErro
 *
 * @apiError  (Error 404) FilmeNaoEncontrado O ID do filme não foi encontrado.
 *
 * @apiErrorExample {json} FilmeNaoEncontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "FilmeNaoEncontrado"
 *     }
*/

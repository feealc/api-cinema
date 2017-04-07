
// ================================================================================================
// Requisicao - Body
// ================================================================================================

/**
 * @apiDefine UsuarioRequisicaoBody
 *
 * @apiParam (Body) {String} username Username do usuário. Não pode conter espaço e caracter especial.
 * @apiParam (Body) {String} password Senha do usuário. Precisa conter uma letra maiúscula, um número e um caracter especial.
 * @apiParam (Body) {String} email E-mail válido.
*/

/**
 * @apiDefine UsuarioAuthRequisicaoBody
 *
 * @apiParam (Body) {String} username Username do usuário.
 * @apiParam (Body) {String} password Senha do usuário.
 * @apiParam (Body) {String} [expiresIn] Duração da validade do token. Formato: N[s|m|h]. Exemplo: 10s (10 segundos) ou 2h (2 horas). Se não informado, o default é 1h.
*/

// ================================================================================================
// Retorno - Sucesso
// ================================================================================================

/**
 * @apiDefine UsuarioRetornoSucesso
 *
 * @apiSuccess {String} _id ID do usuário.
 * @apiSuccess {String} username Username do usuário.
 * @apiSuccess {String} password Senha do usuário.
 * @apiSuccess {String} email E-mail do usuário.
 * @apiSuccess {String} dt_criacao Data de criação (ISO 8601).
*/

/**
 * @apiDefine UsuarioAuthRetornoSucesso
 *
 * @apiSuccess {String} message ID do usuário.
 * @apiSuccess {String} token Token gerado para o usuário.
*/

// ================================================================================================
// Retorno - Erro
// ================================================================================================

/**
 * @apiDefine UsuarioRetornoErro
 *
 * @apiError  (Error 404) UsuarioNaoEncontrado O ID do usuário não foi encontrado.
 *
 * @apiErrorExample {json} UsuarioNaoEncontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "UsuarioNaoEncontrado"
 *     }
*/

/**
 * @apiDefine UsuarioRetornoErroValidacao
 *
 * @apiError (Error 400 - Validação)  param Nome do parâmetro com erro.
 * @apiError (Error 400 - Validação)  msg Descrição do erro.
 * @apiError (Error 400 - Validação)  [value] Valor do parâmetro com erro.
 *
 * @apiErrorExample {json} ErroValidação:
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "username",
 *       "msg": "O username é obrigatório e não pode conter espaço e caracter especial"
 *     }]
 *
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "email",
 *       "msg": "O e-mail é obrigatório e precisa ser válido",
 *       "value": ""
 *     }]
*/

/**
 * @apiDefine UsuarioRetornoErroValidacaoAuth
 *
 * @apiError (Error 400 - Validação)  param Nome do parâmetro com erro.
 * @apiError (Error 400 - Validação)  msg Descrição do erro.
 * @apiError (Error 400 - Validação)  [value] Valor do parâmetro com erro.
 *
 * @apiErrorExample {json} ErroValidação:
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "username",
 *       "msg": "O username é obrigatório"
 *     }]
 *
 *     HTTP/1.1 400 Bad Request
 *     [{
 *       "param": "expiresIn",
 *       "msg": "A expiração do token precisa estar no formato N[s|m|h]. Exemplo: 10s (10 segundos) ou 2h (2 horas)",
 *       "value": "5p"
 *     }]
*/

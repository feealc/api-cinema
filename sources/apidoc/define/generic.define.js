/**
 * @apiDefine HeaderToken
 *
 * @apiHeader {String} token Token gerado para o usuário.
 *
 * @apiHeaderExample {json} Token:
 *     {
 *       "token": "kfahfjasbebrvrsklvnsvndsjkvsvsv.faklfjejvbrkvbrsk"
 *     }
*/

/**
 * @apiDefine HeaderCType
 *
 * @apiHeader {String} Content-Type application/json
 *
 * @apiHeaderExample {json} Content-Tyoe:
 *     {
 *       "Content-Type": "application/json"
 *     }
*/

/**
 * @apiDefine TokenRetornoErro
 *
 * @apiError  (Error 400) TokenNaoInformado O token não foi informado no header da requisição.
 * @apiError  (Error 401) TokenInvalido O token informado na requisão é inválido.
 *
 * @apiErrorExample {json} TokenNaoInformado:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "TokenNaoInformado"
 *     }
 *
 * @apiErrorExample {json} TokenInvalido:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "TokenInvalido"
 *     }
*/

/**
 * @apiDefine IDInvalidoErro
 *
 * @apiError  (Error 400) IDInvalido O ID informado é inválido.
 *
 * @apiErrorExample {json} IDInvalido:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "IDInvalido"
 *     }
*/


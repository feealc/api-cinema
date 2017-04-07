
var errorMessagesValidatorFilme = {
	'nome': 'O nome é obrigatório',
	'sinopse': 'A sinopse precisa estar preenchida',
	'diretor': 'O nome do diretor precisar estar preenchido',
	'elenco': 'O elenco precisa ser um array e os valores não podem estar em branco ou conter números',
	'data_lancamento': 'A data de lançamento precisa ser valida e estar no formato ISO 8601 (YYYY-MM-DD)',
	'duracao': 'A duração pode conter somente números',
	'genero': 'O gênero precisa ser um array e os valores não podem conter números',
	'rating': 'O rating precisa ser um número entre 0.0 e 10.0',
	'pais': 'O país precisa estar no formato da ISO 3166 (Alfa 3)'
}

var errorMessagesValidatorUsuario = {
	'username': 'O username é obrigatório e não pode conter espaço e caracter especial',
	'password': 'A senha é obrigatória e precisa ter uma letra maiúscula, um número e um caracter especial',
	'email': 'O e-mail é obrigatório e precisa ser válido'
}

var errorMessagesValidatorUsuarioAuth = {
	'username': 'O username é obrigatório',
	'password': 'A senha é obrigatória',
	'expiresIn': 'A expiração do token precisa estar no formato N[s|m|h]. Exemplo: 10s (10 segundos) ou 2h (2 horas)'
}

var msgResponse = {
	'id400': 'IDInvalido'
}

var msgResponseFilme = {
	'f500all': 'ErroRecuperarFilmes',
	'f500one': 'ErroRecuperarFilme',
	'f500create': 'ErroCriarFilme',
	'f500': 'ErroRecuperarFilme',
	//
	'f400upd': 'ErroAlterarFilme',
	'f400del': 'ErroApagarFilme',
	'f404': 'FilmeNaoEncontrado',
	//
	'f200upd': 'FilmeAlterado',
	'f200del': 'FilmeApagado',
	//
	'f201': 'FilmeCriado'
}

var msgResponseUsuario = {
	'u500all': 'ErroRecuperarUsuarios',
	'u500auth': 'ErroAutenticarUsuario',
	'u500create': 'ErroCriarUsuario',
	'u500del': 'ErroApagarUsuario',
	//
	'u400duplikeyU': 'UsernameJaExiste',
	'u400duplikeyE': 'EmailJaExiste',
	'u400token': 'TokenNaoInformado',
	'u401token': 'TokenInvalido',
	'u404': 'UsuarioNaoEncontrado',
	//
	'u200del': 'UsuarioApagado',
	'u200auth': 'UsuarioAutenticado',
	//
	'u201': 'UsuarioCriado'
}

module.exports = {
	errorMessagesValidatorFilme,
	errorMessagesValidatorUsuario,
	errorMessagesValidatorUsuarioAuth,
	//
	msgResponse,
	msgResponseFilme,
	msgResponseUsuario
}

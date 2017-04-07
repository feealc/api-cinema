
var expressValidatorParam = {
	'param': 'param',
	'msg': 'msg',
	'value': 'value',
	'array2': ['param', 'msg'],
	'array3': ['param','msg','value']
}

// ================================================================================================
// USUARIOS
// ================================================================================================

// Model
var objUsuarioModel = {
	arrayKeys: [
		'_id',
		'username',
		'password',
		'email',
		'dt_criacao'
	],
	param: {
		'id': '_id',
		'username': 'username',
		'password': 'password',
		'email': 'email',
		'token': 'token',
		'expiresIn': 'expiresIn',
		'v': '__v'
	}
}

// Create
var objCreateUsuario = {
	usuarioOk: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"email": "teste@cw.com"
	},
	usuarioUsernameAusente: {
		"password": "FlashArrow8887!",
		"email": "teste@cw.com"
	},
	usuarioUsernameBranco: {
		"username": "",
		"password": "FlashArrow8887!",
		"email": "teste@cw.com"
	},
	usuarioUsernameEspaco: {
		"username": "leonard snart",
		"password": "FlashArrow8887!",
		"email": "teste@cw.com"
	},
	usuarioUsernameCaracterEspecial: {
		"username": "leonardsnart?",
		"password": "FlashArrow8887!",
		"email": "teste@cw.com"
	},
	usuarioPasswordAusente: {
		"username": "leonardsnart",
		"email": "teste@cw.com"
	},
	usuarioPasswordBranco: {
		"username": "leonardsnart",
		"password": "",
		"email": "teste@cw.com"
	},
	usuarioPasswordEspaco: {
		"username": "leonardsnart",
		"password": "FlashArrow8887! ",
		"email": "teste@cw.com"
	},
	usuarioPasswordSemNumero: {
		"username": "leonardsnart",
		"password": "FlashArrow!",
		"email": "teste@cw.com"
	},
	usuarioPasswordSemMinusculo: {
		"username": "leonardsnart",
		"password": "FLASHAARROW8887!",
		"email": "teste@cw.com"
	},
	usuarioPasswordSemMaiusculo: {
		"username": "leonardsnart",
		"password": "flasharrow8887!",
		"email": "teste@cw.com"
	},
	usuarioPasswordCaracterEspecial: {
		"username": "leonardsnart",
		"password": "FlashArrow8887",
		"email": "teste@cw.com"
	},
	usuarioEmailInvalido: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"email": "testecw.com"
	}
}

// Autenticar
var objAuthUsuario = {
	usuarioOk: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "30s"
	},
	usuarioUsernameAusente: {
		"password": "FlashArrow8887!"
	},
	usuarioPasswordAusente: {
		"username": "leonardsnart"
	},
	usuarioExpiresBranco: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": ""
	},
	usuarioExpiresEspaco: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "27h "
	},
	usuarioExpiresPonto: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "27.5h"
	},
	usuarioExpiresVirgula: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "78,5h"
	},
	usuarioExpiresLetra: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "2f7h"
	},
	usuarioExpiresTipo: {
		"username": "leonardsnart",
		"password": "FlashArrow8887!",
		"expiresIn": "27x"
	},
	usuarioUsernameIncorreto: {
		"username": "leonardsnart2",
		"password": "FlashArrow8887!"
	},
	usuarioPasswordIncorreto: {
		"username": "leonardsnart",
		"password": "Supergirl0102!"
	}
}


// ================================================================================================
// FILMES
// ================================================================================================

// Model
var objFilmeModel = {
	arrayKeys: [
		'_id',
		'nome',
		'sinopse',
		'diretor',
		'elenco',
		'data_lancamento',
		'duracao',
		'genero',
		'rating',
		'pais',
		'dt_criacao',
		'dt_ult_at'
	],
	param: {
		'id': '_id',
		'nome': 'nome',
		'sinopse': 'sinopse',
		'diretor': 'diretor',
		'elenco': 'elenco',
		'data_lancamento': 'data_lancamento',
		'duracao': 'duracao',
		'genero': 'genero',
		'rating': 'rating',
		'pais': 'pais',
		'v': '__v'
	}
}

// Create
var objCreateFilme = {
	filmeOk: {
		"nome": "007 GoldenEye",
		"sinopse": "007 mata todo mundo",
		"diretor": "Martin Campell", 
		"elenco": ["Pierce Brosnan", "Sean Bean", "Izabella Scorupco", "Judi Dench"],
		"data_lancamento": "1995-11-13",
		"duracao": "130",
		"genero": ["Ação", "Aventura"],
		"rating": "7.2",
		"pais": "USA"
	},
	filmeOkMini: {
		"nome": "Harry Potter",
	},
	filmeNomeAusente: {
		"sinopse": "007 mata todo mundo",
		"diretor": "Martin Campell", 
		"elenco": ["Pierce Brosnan", "Sean Bean", "Izabella Scorupco", "Judi Dench"],
		"data_lancamento": "1995-11-13",
		"duracao": "130",
		"genero": ["Ação", "Aventura"],
		"rating": "7.2",
		"pais": "USA"
	},
	filmeSinopseBranco: {
		"nome": "Harry Potter",
		"sinopse": ""
	},
	filmeDiretorBranco: {
		"nome": "Harry Potter",
		"diretor": ""
	},
	filmeElencoNaoArray: {
		"nome": "Harry Potter",
		"elenco": "Hermione"
	},
	filmeElencoArrayVazio: {
		"nome": "Harry Potter",
		"elenco": []
	},
	filmeElencoArrayNumero: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "Rony", "Harry", "teste1"]
	},
	filmeElencoArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "", "Harry", "Rony"]
	},
	filmeDataLancamentoAnoInvalido: {
		"nome": "HP",
		"data_lancamento": "209-07-15"
	},
	filmeDataLancamentoMesInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-7-15"
	},
	filmeDataLancamentoDiaInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-07-5"
	},
	filmeDataLancamentoStringInvalido: {
		"nome": "HP",
		"data_lancamento": "20M9-07-15"
	},
	filmeDataLancamentoDuracaoInvalido: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoVazia: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoInvalida: {
		"nome": "HP",
		"duracao": "134f"
	},
	filmeGeneroNaoArray: {
		"nome": "Harry Potter",
		"genero": "Aventura"
	},
	filmeGeneroArrayVazio: {
		"nome": "Harry Potter",
		"genero": []
	},
	filmeGeneroArrayNumero: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "Ação", "abc3", "Ficção"]
	},
	filmeGeneroArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "", "Ficção", "Ação"]
	},
	filmeRatingVazio: {
		"nome": "HP",
		"rating": ""
	},
	filmeRatingVirgula: {
		"nome": "HP",
		"rating": "5,5"
	},
	filmeRatingInvalida: {
		"nome": "HP",
		"rating": "134a"
	},
	filmePaisVazio: {
		"nome": "HP",
		"pais": ""
	},
	filmePaisNumero: {
		"nome": "HP",
		"pais": "BR1"
	},
	filmePaisCharEspecial: {
		"nome": "HP",
		"pais": "E*A"
	},
	filmePaisTamanho: {
		"nome": "HP",
		"pais": "BRAA"
	}
}

// Update Full
var objUpdFullFilme = {
	filmeOk: {
		"nome": "007 Tomorrow Never Dies",
		"sinopse": "007 mata todo mundo",
		"diretor": "Roger Spottiswoode", 
		"elenco": ["Pierce Brosnan", "Jonathan Pryce", "Michelle Yeoh", "Judi Dench"],
		"data_lancamento": "1998-01-16",
		"duracao": "119",
		"genero": ["Ação", "Aventura"],
		"rating": "6.5",
		"pais": "USA"
	},
	filmeNomeAusente: {
		"sinopse": "007 mata todo mundo",
		"diretor": "Roger Spottiswoode", 
		"elenco": ["Pierce Brosnan", "Jonathan Pryce", "Michelle Yeoh", "Judi Dench"],
		"data_lancamento": "1998-01-16",
		"duracao": "119",
		"genero": ["Ação", "Aventura"],
		"rating": "6.5",
		"pais": "USA"
	},
	filmeSinopseBranco: {
		"nome": "Harry Potter",
		"sinopse": ""
	},
	filmeDiretorBranco: {
		"nome": "Harry Potter",
		"diretor": ""
	},
	filmeElencoNaoArray: {
		"nome": "Harry Potter",
		"elenco": "Hermione"
	},
	filmeElencoArrayVazio: {
		"nome": "Harry Potter",
		"elenco": []
	},
	filmeElencoArrayNumero: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "Rony", "Harry", "teste1"]
	},
	filmeElencoArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "", "Harry", "Rony"]
	},
	filmeDataLancamentoAnoInvalido: {
		"nome": "HP",
		"data_lancamento": "209-07-15"
	},
	filmeDataLancamentoMesInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-7-15"
	},
	filmeDataLancamentoDiaInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-07-5"
	},
	filmeDataLancamentoStringInvalido: {
		"nome": "HP",
		"data_lancamento": "20M9-07-15"
	},
	filmeDataLancamentoDuracaoInvalido: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoVazia: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoInvalida: {
		"nome": "HP",
		"duracao": "134f"
	},
	filmeGeneroNaoArray: {
		"nome": "Harry Potter",
		"genero": "Aventura"
	},
	filmeGeneroArrayVazio: {
		"nome": "Harry Potter",
		"genero": []
	},
	filmeGeneroArrayNumero: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "Ação", "abc3", "Ficção"]
	},
	filmeGeneroArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "", "Ficção", "Ação"]
	},
	filmeRatingVazio: {
		"nome": "HP",
		"rating": ""
	},
	filmeRatingVirgula: {
		"nome": "HP",
		"rating": "5,5"
	},
	filmeRatingInvalida: {
		"nome": "HP",
		"rating": "134a"
	},
	filmePaisVazio: {
		"nome": "HP",
		"pais": ""
	},
	filmePaisNumero: {
		"nome": "HP",
		"pais": "BR1"
	},
	filmePaisCharEspecial: {
		"nome": "HP",
		"pais": "E*A"
	},
	filmePaisTamanho: {
		"nome": "HP",
		"pais": "BRAA"
	}
}

// Update Parcial
var objUpdParcialFilme = {
	filmeOk: {
		"nome": "007 Tomorrow Never Dies",
		"sinopse": "007 mata todo mundo",
		"diretor": "Roger Spottiswoode", 
		"elenco": ["Pierce Brosnan", "Jonathan Pryce", "Michelle Yeoh", "Judi Dench"],
		"data_lancamento": "1998-01-16",
		"duracao": "119",
		"genero": ["Ação", "Aventura"],
		"rating": "6.5",
		"pais": "USA"
	},
	filmeNomeAusente: {
		"sinopse": "007 mata todo mundo",
		"diretor": "Roger Spottiswoode", 
		"elenco": ["Pierce Brosnan", "Jonathan Pryce", "Michelle Yeoh", "Judi Dench"],
		"data_lancamento": "1998-01-16",
		"duracao": "119",
		"genero": ["Ação", "Aventura"],
		"rating": "6.5",
		"pais": "USA"
	},
	filmeSinopseBranco: {
		"nome": "Harry Potter",
		"sinopse": ""
	},
	filmeDiretorBranco: {
		"nome": "Harry Potter",
		"diretor": ""
	},
	filmeElencoNaoArray: {
		"nome": "Harry Potter",
		"elenco": "Hermione"
	},
	filmeElencoArrayVazio: {
		"nome": "Harry Potter",
		"elenco": []
	},
	filmeElencoArrayNumero: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "Rony", "Harry", "teste1"]
	},
	filmeElencoArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"elenco": ["Hermione", "", "Harry", "Rony"]
	},
	filmeDataLancamentoAnoInvalido: {
		"nome": "HP",
		"data_lancamento": "209-07-15"
	},
	filmeDataLancamentoMesInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-7-15"
	},
	filmeDataLancamentoDiaInvalido: {
		"nome": "HP",
		"data_lancamento": "2009-07-5"
	},
	filmeDataLancamentoStringInvalido: {
		"nome": "HP",
		"data_lancamento": "20M9-07-15"
	},
	filmeDataLancamentoDuracaoInvalido: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoVazia: {
		"nome": "HP",
		"duracao": ""
	},
	filmeDuracaoInvalida: {
		"nome": "HP",
		"duracao": "134f"
	},
	filmeGeneroNaoArray: {
		"nome": "Harry Potter",
		"genero": "Aventura"
	},
	filmeGeneroArrayVazio: {
		"nome": "Harry Potter",
		"genero": []
	},
	filmeGeneroArrayNumero: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "Ação", "abc3", "Ficção"]
	},
	filmeGeneroArrayPosicaoBranco: {
		"nome": "Harry Potter",
		"genero": ["Aventura", "", "Ficção", "Ação"]
	},
	filmeRatingVazio: {
		"nome": "HP",
		"rating": ""
	},
	filmeRatingVirgula: {
		"nome": "HP",
		"rating": "5,5"
	},
	filmeRatingInvalida: {
		"nome": "HP",
		"rating": "134a"
	},
	filmePaisVazio: {
		"nome": "HP",
		"pais": ""
	},
	filmePaisNumero: {
		"nome": "HP",
		"pais": "BR1"
	},
	filmePaisCharEspecial: {
		"nome": "HP",
		"pais": "E*A"
	},
	filmePaisTamanho: {
		"nome": "HP",
		"pais": "BRAA"
	}
}

module.exports = {
	expressValidatorParam,
	//
	objUsuarioModel,
	objCreateUsuario,
	objAuthUsuario,
	//
	objFilmeModel,
	objCreateFilme,
	objUpdFullFilme,
	objUpdParcialFilme
	//
}

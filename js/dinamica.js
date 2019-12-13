'use strict'

function energiaCinetica(massa, velocidade){
    return massa / 2 * velocidade ** 2;
}

function energiaMecanica(energiaCinetica, energiaPotencial){
    return energiaCinetica + energiaPotencial;
}

function energiaPotencialElastica(constanteElasticaDaMola, elongacaoDaMola){
    return constanteElasticaDaMola / 2 * elongacaoDaMola ** 2;
}

function energiaPotencialGravitacional(massa, gravidade, altura){
    return massa * gravidade * altura;
}

function forcadeAtritoDinamico(coeficienteDeAtritoDinamico, forcaNormal){
    return coeficienteDeAtritoDinamico * forcaNormal;
}

function forcadeAtritoEstatico(coeficienteDeAtritoEstático, forcaNormal){
    return coeficienteDeAtritoEstático * forcaNormal;
}

function forcaCentripetaUm(massa, aceleracaoCentripeta){
    return massa * aceleracaoCentripeta;
}

function forcaCentripetaDois(massa, velocidade, raioDoCirculo){
    return massa * velocidade ** 2 / raioDoCirculo;
}

function forcaResultante(forca){
    //Fazer depois    
}

function impulso(forcaResultante, intervaloDeTempo){
    return forcaResultante * intervaloDeTempo;
}

function leiDeHooke(constanteElasticaDaMola, elongacaoDaMola){
    return constanteElasticaDaMola * elongacaoDaMola;
}

function pesoDeUmCorpo(massa, gravidade){
    return massa * gravidade;
}

function potenciaInstantaneaUm(){
    //Fazer depois
}

function potenciaInstantaneaDois(forcaEscalarResultante, velocidade){
    return forcaEscalarResultante * velocidade;
}

function potenciaMediaUm(trabalho, intervaloDeTempo){
    return trabalho / intervaloDeTempo;
}

function potenciaMediaDois(forcaEscalarResultante, deslocamento, intervaloDeTempo){
    return forcaEscalarResultante * deslocamento / intervaloDeTempo;
}

function potenciaMediaTres(forcaEscalarResultante, velocidadeMedia){
    return forcaEscalarResultante * velocidadeMedia;
}

function quantidadeDeMovimento(massa, velocidade){
    return massa * velocidade;
}

function segundaLeiDeNewton(massa, aceleracaoEscalar){
    return massa * aceleracaoEscalar;
}

function trabalho(forcaEscalarResultante, deslocamento, cosAnguloFormadoComAHorizontal){
    return forcaEscalarResultante  * deslocamento * cosAnguloFormadoComAHorizontal;
}

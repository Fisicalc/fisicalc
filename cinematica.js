'use strict'

function aceleracaoAngular(variacaoDaVelocidadeAngular, tempo){
    return variacaoDaVelocidadeAngular / tempo;
}

function aceleracaoCentripetaUm(velocidade, raioDoCirculo){
    return velocidade ** 2 / raioDoCirculo;
}

function aceleracaoCentripetaDois(velocidadeAngular, raioDoCirculo){
    return velocidadeAngular ** 2 * raioDoCirculo;
}

function aceleracaoMedia(variacaoDaVelocidade, variacaoDoTempo){
    return variacaoDaVelocidade / variacaoDoTempo;
}

function componenteHorizontalDaVelocidadeInicial(velocidadeInicial, cosAnguloEntreXEOLancamento){
    return Math.abs(velocidadeInicial) * cosAnguloEntreXEOLancamento;
}

function componenteVerticalDaVelocidadeInicial(velocidadeInicial, senAnguloEntreXEOLancamento){
    return Math.abs(velocidadeInicial) * senAnguloEntreXEOLancamento;
}

function deslocamentoAngular(variacaoDaPosicaoNoArco, raioDoCirculo){
    return variacaoDaPosicaoNoArco / raioDoCirculo;
}

function equacaoDeTorricelli(velocidadeInicial, aceleracao, distanciaPercorrida){
    return Math.sqrt((velocidadeInicial ** 2 + (2 * aceleracao) * distanciaPercorrida));
}

function equacaoDeTorricelliNoMovimentoVerticalAdicao(velocidadeInicial, gravidade, variacaoDeAltura){
    return Math.sqrt((velocidadeInicial ** 2 + 2 * gravidade * variacaoDeAltura));
}

function equacaoDeTorricelliNoMovimentoVerticalSubtracao(velocidadeInicial, gravidade, variacaoDeAltura){
    return Math.sqrt((velocidadeInicial ** 2 - 2 * gravidade * variacaoDeAltura));
}

function equacaoDeTorricelliParaMovimentoCircular(velocidadeAngularInicial, aceleracaoAngular, deslocamentoAngular){
    return Math.sqrt((velocidadeAngularInicial ** 2 + 2 * aceleracaoAngular * deslocamentoAngular));
}

function funcaoHorariaDaPosicaoAngular(anguloInicial, velocidadeAngularInicial, tempo, aceleracaoAngular){
    return anguloInicial + velocidadeAngularInicial * tempo + (aceleracaoAngular / 2) * tempo ** 2;
}

function funcaoHorariaDaPosicaoAngularNoMovimentoCircularUniforme(anguloInicial, velocidadeAngular, tempo){
    return anguloInicial + velocidadeAngular * tempo;
}

function funcaoHorariaDaPosicaoEmFuncaoDoTempo(posicaoInicial, velocidadeInicial, tempo, aceleracao){
    return posicaoInicial + velocidadeInicial * tempo + (aceleracao / 2) * tempo ** 2;
}

function funcaoHorariaDaPosicaoEmFuncaoDoTempoNoMovimentoVerticalAdicao(alturaInicial, velocidadeInicial, gravidade, tempo){
    return alturaInicial + velocidadeInicial * tempo + (gravidade / 2) * tempo ** 2;
}

function funcaoHorariaDaPosicaoHorizontal(posicaoHorizontalInicial, componenteInicialDoVetorVelocidadeInicial, tempo){
    return posicaoHorizontalInicial + componenteInicialDoVetorVelocidadeInicial * tempo;
}

function funcaoHorariaDaPosicaoVertical(posicaoVerticalInicial, componenteVerticalDoVetorVelocidadeInicial, tempo){
    return posicaoVerticalInicial + componenteVerticalDoVetorVelocidadeInicial * tempo + (gravidade / 2) * tempo ** 2;
}

function funcaoHorariaDaVelocidadeAngular(velocidadeAngularInicial, aceleracaoAngular, tempo){
    return velocidadeAngularInicial + aceleracaoAngular * tempo;
}

function funcaoHorariaDaVelocidadadeNoMovimentoVerticalSubtracao(alturaInicial, velocidadeInicial, gravidade, tempo){
    return alturaInicial + velocidadeInicial * tempo - (gravidade / 2) * tempo ** 2
}

function funcaoHorariaDaVelocidade(velocidadeInicial, aceleracao, tempo){
    return velocidadeInicial + aceleracao * tempo;
}

function funcaoHorariaDaVelocidadadeNoMovimentoVerticalAdicao(velocidadeInicial, gravidade, tempo){
    return velocidadeInicial + gravidade * tempo;
}

function funcaoHorariaDaVelocidadadeNoMovimentoVerticalSubtracao(velocidadeInicial, gravidade, tempo){
    return velocidadeInicial - gravidade * tempo;
}

function funcaoHorariaDoDeslocamento(posicaoInicial, velocidade, intervaloDeTempo){
    return posicaoInicial + velocidade * intervaloDeTempo;
}

function posicaoAngular(arcoDeCirculoDescrito, raioDoCirculo){
    return arcoDeCirculoDescrito / raioDoCirculo;
}

function velocidadeAngular(deslocamentoAngular, tempo){
    return deslocamentoAngular / tempo;
}

function velocidadeMedia(distanciaPercorrida, intervaloDeTempo){
    return distanciaPercorrida / intervaloDeTempo;
}
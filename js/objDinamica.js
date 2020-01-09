'use strict'

const dinamica = {
    energiaCinetica:{
        btn: "E<sub>C</sub>",

        formula: "E_C=\\frac{1}{2}mv^2",

        metodo: function(massa, velocidade){
            return massa / 2 * velocidade ** 2;
        },

        nome: "Energia Cinética"
    },

    energiaMecanica:{
        formula: "E_M=E_C+E_P",
        
        function(energiaCinetica, energiaPotencial){
            return energiaCinetica + energiaPotencial;
        },

        nome: "Energia Mecânica"
    },

    energiaPotencialElastica:{
        formula: "E_{PE}=\\frac{1}{2}kx^2",
        
        metodo: function(constanteElasticaDaMola, elongacaoDaMola){
            return constanteElasticaDaMola / 2 * elongacaoDaMola ** 2;
        },

        nome: "Energia Potencial Elástica"
    },

    energiaPotencialGravitacional:{
        formula: "E_{PG}=mgh",

        metodo: function(massa, gravidade, altura){
            return massa * gravidade * altura;
        },

        nome: "Energia Potencial Gravitacional"
    },

    forcaDeAtritoDinamico:{
        formula: "F_{AT}=\\mu_{din}N",
        
        metodo: function(coeficienteDeAtritoDinamico, forcaNormal){
            return coeficienteDeAtritoDinamico * forcaNormal;
        },

        nome: "Força de Atrito Dinâmico"
    },

    forcaDeAtritoEstatico:{
        formula: "F_{AT}=\\mu_{est}N",
        
        metodo: function(coeficienteDeAtritoEstático, forcaNormal){
            return coeficienteDeAtritoEstático * forcaNormal;
        },

        nome: "Força de Atrito Estático"
    },

    forcaCentripeta:{
        formula1: "F_{CP}=ma_{CP}",
        formula2: "F_{CP}=m\\frac{v^2}{r}",
        
        metodo1: function(massa, aceleracaoCentripeta){
        return massa * aceleracaoCentripeta;
        },
        metodo2: function(massa, velocidade, raioDoCirculo){
            return massa * velocidade ** 2 / raioDoCirculo;
        },

        nome: "Força Centrípeta"
    },

    /*forcaResultante:{
        //Fazer depois
    },*/

    impulso:{
        formula: "\\vec{I}=\\vec{F}\\Delta{t}",
        
        metodo: function(forcaResultante, intervaloDeTempo){
            return forcaResultante * intervaloDeTempo;
        },

        nome: "Impulso"
    },

    leiDeHooke:{
        formula: "F=kx",

        metodo: function(constanteElasticaDaMola, elongacaoDaMola){
            return constanteElasticaDaMola * elongacaoDaMola;
        },

        nome: "Lei de Hooke"
    },

    pesoDeUmCorpo:{
        formula: "\\vec{P}=m\\vec{g}",
        
        metodo: function(massa, gravidade){
            return massa * gravidade;
        },

        nome: "Peso de um Corpo"
    },

    potenciaInstantanea:{
        formula1: "P=\\lim_{t\\to0}\\vec{P}",
        formula2: "P=F\\vec{v}",

        metodo1: function(){
        //Fazer depois
        },
        metodo2: function(forcaEscalarResultante, velocidade){
            return forcaEscalarResultante * velocidade;
        },

        nome: "Potência Instantânea"
    },

    potenciaMedia:{
        formula1: "\\vec{P}=\\frac{\\tau}{\\Delta{t}}",
        formula2: "\\vec{P}=\\frac{Fd}{\\Delta{t}}",
        formula3: "\\vec{P}=F\\vec{v}",
        
        metodo1: function(trabalho, intervaloDeTempo){
            return trabalho / intervaloDeTempo;
        },
        metodo2: function(forcaEscalarResultante, deslocamento, intervaloDeTempo){
            return forcaEscalarResultante * deslocamento / intervaloDeTempo;
        },
        metodo3:function(forcaEscalarResultante, velocidadeMedia){
            return forcaEscalarResultante * velocidadeMedia;
        },

        nome: "Potência Média"
    },

    quantidadeDeMovimento:{
        formula: "\\vec{Q}=m\\vec{v}",

        metodo: function(massa, velocidade){
            return massa * velocidade;
        },

        nome: "Quantidade de Movimento"
    },

    segundaLeiDeNewton:{
        formula: "F=ma",
        
        metodo: function(massa, aceleracaoEscalar){
            return massa * aceleracaoEscalar;
        },

        nome: "Segunda Lei de Newton"
    },

    trabalho:{
        formula: "\\tau=F\\cdot{d}\\cdot{cos\\theta}",

        metodo: function(forcaEscalarResultante, deslocamento, cosAnguloFormadoComAHorizontal){
            return forcaEscalarResultante  * deslocamento * cosAnguloFormadoComAHorizontal;
        },

        nome: "Trabalho"
    }
}
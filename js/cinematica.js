'use strict'

const cinematica = {
    aceleracaoAngular:{
        formula: "\\alpha = \\frac{\\Delta\\omega}{t}",
        
        metodo: function(variacaoDaVelocidadeAngular, tempo){
            return variacaoDaVelocidadeAngular / tempo;
        }
    },

    aceleracaoCentripeta:{
        formula1: "a_{cp} = \\frac{v^2}{r}",
        formula2: "a_{cp} = \\omega^2r",

        metodo1: function(velocidade, raioDoCirculo){
            return velocidade ** 2 / raioDoCirculo;
        },
        metodo2: function(velocidadeAngular, raioDoCirculo){
            return velocidadeAngular ** 2 * raioDoCirculo;
        }
    },

    aceleracaoMedia:{
        formula: "\\vec{a} = \\frac{\\Delta{v}}{\\Delta{t}}",

        metodo: function(variacaoDaVelocidade, intervaloDeTempo){
            return variacaoDaVelocidade / intervaloDeTempo;
        }
    },

    alcanceMaximoDoProjetilHorizontalmente:{
        formula: "R=\\frac{\\lvert\\vec{v_0\\rvert}\\cdot sen(2\\theta)}{g}",
        
        metodo: function(velocidadeInicial, senAnguloEntreXEoLancamento, gravidade){
            return (Math.abs(velocidadeInicial) ** 2 * senAnguloEntreXEoLancamento) / gravidade;
        }
    },

    componenteHorizontalDaVelocidadeInicial:{
        formula: "v_{0_x}=\\lvert\\vec{v_0}\\rvert\\cdot\\cos\\theta", 

        metodo: function(velocidadeInicial, cosAnguloEntreXEOLancamento){
            return Math.abs(velocidadeInicial) * cosAnguloEntreXEOLancamento;
        }
    },

    componenteVerticalDaVelocidadeInicial:{
        formula: "v_{0_y}=\\lvert\\vec{v_0}\\rvert\\cdot sen \\theta",

        metodo: function(velocidadeInicial, senAnguloEntreXEOLancamento){
            return Math.abs(velocidadeInicial) * senAnguloEntreXEOLancamento;
        }
    },

    deslocamentoAngular:{
        formula: "\\Delta\\varphi=\\frac{\\Delta{S}}{r}",

        metodo: function(variacaoDaPosicaoNoArco, raioDoCirculo){
            return variacaoDaPosicaoNoArco / raioDoCirculo;
        }
    },

    equacaoDeTorricelli:{
        formula: "v^2={v_0}^2+2a\\Delta{d}",

        metodo: function(velocidadeInicial, aceleracao, distanciaPercorrida){
            return Math.sqrt((velocidadeInicial ** 2 + (2 * aceleracao) * distanciaPercorrida));
        }
    }, 

    equacaoDeTorricelliNoMovimentoVertical:{
        formula1: "v^2=v_0+2g\\Delta{h}",
        formula2: "v^2=v_0-2g\\Delta{h}",

        metodo1: function(velocidadeInicial, gravidade, variacaoDeAltura){
            return Math.sqrt((velocidadeInicial ** 2 + 2 * gravidade * variacaoDeAltura));
        },
        metodo2: function(velocidadeInicial, gravidade, variacaoDeAltura){
            return Math.sqrt((velocidadeInicial ** 2 - 2 * gravidade * variacaoDeAltura));
        }
    },

    equacaoDeTorricelliParaMovimentoCircular:{
        formula: "\\omega^2={\\omega_0}^2+2a\\Delta\\varphi",
        
        metodo: function(velocidadeAngularInicial, aceleracaoAngular, deslocamentoAngular){
            return Math.sqrt((velocidadeAngularInicial ** 2 + 2 * aceleracaoAngular * deslocamentoAngular));
        }
    },

    funcaoHorariaDaPosicaoAngular:{
        formula: "\\varphi=\\varphi_0+\\omega_0t+\\frac{1}{2}at^2",
        
        metodo: function(anguloInicial, velocidadeAngularInicial, tempo, aceleracaoAngular){
            return anguloInicial + velocidadeAngularInicial * tempo + (aceleracaoAngular / 2) * tempo ** 2;
        }
    },

    funcaoHorariaDaPosicaoAngularNoMovimentoCircularUniforme:{
        formula: "\\varphi=\\varphi_0+\\omega{t}",
        
        metodo: function(anguloInicial, velocidadeAngular, tempo){
            return anguloInicial + velocidadeAngular * tempo;
        }
    },

    funcaoHorariaDaPosicaoEmFuncaoDoTempo:{
        formula: "s=s_0+{v_0}t+\\frac{1}{2}at^2",

        metodo: function(posicaoInicial, velocidadeInicial, tempo, aceleracao){
            return posicaoInicial + velocidadeInicial * tempo + (aceleracao / 2) * tempo ** 2;
        }
    },

    funcaoHorariaDaPosicaoEmFuncaoDoTempoNoMovimentoVertical:{
        formula1: "h=h_0+v_0t+\\frac{1}{2}gt^2",
        formula2: "h=h_0+v_0t-\\frac{1}{2}gt^2",

        metodo1: function(alturaInicial, velocidadeInicial, gravidade, tempo){
            return alturaInicial + velocidadeInicial * tempo + (gravidade / 2) * tempo ** 2;
        },
        metodo2: function(alturaInicial, velocidadeInicial, gravidade, tempo){
            return alturaInicial + velocidadeInicial * tempo - (gravidade / 2) * tempo ** 2;
        }
    },

    funcaoHorariaDaPosicaoHorizontal:{
        formula: "x=x_0+{v_0}_xt",
        
        metodo: function(posicaoHorizontalInicial, componenteHorizontalDoVetorVelocidadeInicial, tempo){
            return posicaoHorizontalInicial + componenteHorizontalDoVetorVelocidadeInicial * tempo;
        }
    },

    funcaoHorariaDaPosicaoVertical:{
        formula: "y=y_0+{v_0}_yt+\\frac{1}{2}gt^2",

        metodo: function(posicaoVerticalInicial, componenteVerticalDoVetorVelocidadeInicial, tempo){
            return posicaoVerticalInicial + componenteVerticalDoVetorVelocidadeInicial * tempo + (gravidade / 2) * tempo ** 2;
        }
    },
    
    funcaoHorariaDaVelocidade:{
        formula: "v = v_0+at",

        metodo: function(velocidadeInicial, aceleracao, tempo){
            return velocidadeInicial + aceleracao * tempo;
        }
    },

    funcaoHorariaDaVelocidadeAngular:{
        formula: "\\omega=\\omega_0+\\alpha{t}",
        
        metodo: function(velocidadeAngularInicial, aceleracaoAngular, tempo){
            return velocidadeAngularInicial + aceleracaoAngular * tempo;
        }
    },

    funcaoHorariaDaVelocidadeNoMovimentoVertical:{
        formula1: "v = v_0+gt",
        formula2: "v = v_0-gt",

        metodo1: function(velocidadeInicial, gravidade, tempo){
            return velocidadeInicial + gravidade * tempo;
        },
        metodo2: function(velocidadeInicial, gravidade, tempo){
            return velocidadeInicial - gravidade * tempo;
        }
    },

    funcaoHorariaDoDeslocamento:{
        formula: "s = s_0+v\\cdot\\Delta{t}",

        metodo: function(posicaoInicial, velocidade, intervaloDeTempo){
            return posicaoInicial + velocidade * intervaloDeTempo;
        }
    },

    posicaoAngular:{
        formula: "\\varphi=\\frac{S}{r}",

        metodo: function(arcoDeCirculoDescrito, raioDoCirculo){
            return arcoDeCirculoDescrito / raioDoCirculo;
        }
    },

    velocidadeAngular:{
        formula: "\\omega=\\frac{\\Delta\\varphi}{t}",

        metodo: function(deslocamentoAngular, tempo){
            return deslocamentoAngular / tempo;
        }
    },

    velocidadeMedia:{
        formula: "\\vec{v}=\\frac{\\Delta{d}}{\\Delta{t}}",
        
        metodo: function(distanciaPercorrida, intervaloDeTempo){
             return distanciaPercorrida / intervaloDeTempo;
        }
    }
}
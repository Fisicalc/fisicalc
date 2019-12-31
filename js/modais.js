'use strict'

document.getElementById("btnCinematica").addEventListener('click', () => modal(document.getElementById("cinematica"), 0));
document.getElementById("btnDinamica").addEventListener("click", () => modal(document.getElementById("dinamica"), 1));
document.getElementById("btnEletrica").addEventListener("click", () => modal(document.getElementById("eletrica"), 2));
document.getElementById("btnEletrostatica").addEventListener("click", () => modal(document.getElementById("eletrostatica"), 3));
document.getElementById("btnEletromagnetismo").addEventListener("click", () => modal(document.getElementById("eletromagnetismo"), 4));
document.getElementById("btnEstatica").addEventListener("click", () => modal(document.getElementById("estatica"), 5));
document.getElementById("btnFisicaModerna").addEventListener("click", () => modal(document.getElementById("fisicaModerna", 6)));
document.getElementById("btnGravitacao").addEventListener("click", () => modal(document.getElementById("gravitacao"), 7));
document.getElementById("btnFisicaDosGases").addEventListener("click", () => modal(document.getElementById("fisicaDosGases"), 8));
document.getElementById("btnHidrostatica").addEventListener("click", () => modal(document.getElementById("hidrostatica"), 9));
document.getElementById("btnOptica").addEventListener("click", () => modal(document.getElementById("optica"), 10));
document.getElementById("btnOndulatoria").addEventListener("click", () => modal(document.getElementById("ondulatoria"), 11));
document.getElementById("btnTermologia").addEventListener("click", () => modal(document.getElementById("termologia"), 12));

function modal(janela, idSpan){
    document.getElementsByClassName("close")[idSpan].addEventListener("click", function(){
        janela.style.display = "none";
    });

    window.onclick = function(){
        if(this.event.target == janela){
            janela.style.display = "none";
        }
    }

    janela.style.display = "block";
}

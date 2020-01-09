'use strict'

document.getElementById("btnCinematica").addEventListener("click", () => modal(document.getElementById("btnCinematica").textContent, cinematica));
document.getElementById("btnDinamica").addEventListener("click", () => modal(document.getElementById("btnDinamica").textContent, dinamica));
document.getElementById("btnEletrica").addEventListener("click", () => modal(document.getElementById("btnEletrica").textContent));
document.getElementById("btnEletrostatica").addEventListener("click", () => modal(document.getElementById("btnEletrostatica").textContent));
document.getElementById("btnEletromagnetismo").addEventListener("click", () => modal(document.getElementById("btnEletromagnetismo").textContent));
document.getElementById("btnEstatica").addEventListener("click", () => modal(document.getElementById("btnEstatica").textContent));
document.getElementById("btnFisicaDosGases").addEventListener("click", () => modal(document.getElementById("btnFisicaDosGases").textContent));
document.getElementById("btnFisicaModerna").addEventListener("click", () => modal(document.getElementById("btnFisicaModerna").textContent));
document.getElementById("btnGravitacao").addEventListener("click", () => modal(document.getElementById("btnGravitacao").textContent));
document.getElementById("btnHidrostatica").addEventListener("click", () => modal(document.getElementById("btnHidrostatica").textContent));
document.getElementById("btnOptica").addEventListener("click", () => modal(document.getElementById("btnOptica").textContent));
document.getElementById("btnOndulatoria").addEventListener("click", () => modal(document.getElementById("btnOndulatoria").textContent));
document.getElementById("btnTermologia").addEventListener("click", () => modal(document.getElementById("btnTermologia").textContent));

function modal(tituloModal, obj){
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    const corpoModal = document.getElementById("modalBody");

    document.getElementById("tituloModal").textContent = tituloModal;



    for(let i in obj){
       let divModal = document.createElement("div");

       let tituloFormula = document.createElement("p");
       tituloFormula.textContent = obj[i].nome;
       divModal.appendChild(tituloFormula);

       let botaoFormula = document.createElement("a");
       botaoFormula.textContent = obj[i].formula;
       divModal.appendChild(botaoFormula);

       corpoModal. appendChild(divModal);

       if(obj[i].formula2 != undefined){
           let divModal2 = document.createElement("div");
           corpoModal.appendChild(divModal2);
           let botaoFormula2 = document.createElement("a");
           botaoFormula2.textContent = obj[i].formula2;
           divModal2.appendChild(botaoFormula2);
       }

        let linhaHorizontal = document.createElement("hr");
        corpoModal.appendChild(linhaHorizontal);
        }

    document.getElementById("close").addEventListener("click", function(){
        modal.style.display = "none";
        corpoModal.innerHTML = "";
    });

    window.onclick = function(){
        if(this.event.target == modal){
            modal.style.display = "none";
            corpoModal.innerHTML = "";
        }
    }
}
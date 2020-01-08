document.getElementById("btnCinematica").addEventListener("click", ()=>mudarModal());

function mudarModal() {
    if (screen.height >= 768){

        //alert(document.body.clientHeight)

        let alturaModalContent = document.body.clientHeight -150;
        let alturaModalBody = document.body.clientHeight -250;


        document.getElementById('modalContent').style.height = alturaModalContent + 'px';
        document.getElementById('modalBody').style.height = alturaModalBody + 'px';
    }
}
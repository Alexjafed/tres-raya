let turno = 'cruz'; 

function permitirSoltar(event) {
    event.preventDefault();
}

function arrastrar(event) {
    
    const ficha = event.target;
    if (ficha.classList.contains(turno)) {
        event.dataTransfer.setData("text", ficha.id);
    } else {
        event.preventDefault(); 
    }
}

function soltar(event) {
    event.preventDefault();

    const caja = event.target;
    if (caja.children.length > 0) return;
    const fichaId = event.dataTransfer.getData("text");
    const ficha = document.getElementById(fichaId);
    if (!ficha) return;
    caja.appendChild(ficha);
    ficha.setAttribute('draggable', 'false');
    turno = (turno === 'cruz') ? 'circulo' : 'cruz';
}

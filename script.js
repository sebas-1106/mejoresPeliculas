let ul= document.getElementById("peliculasLista")
let li= document.getElementsByClassName("peliculaItem");
let boton= document.getElementsByTagName("button");

function eliminarPelicula(boton) {
    boton.remove();
}   
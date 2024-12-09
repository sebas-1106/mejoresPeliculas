function agregarTarea(){
    let listaTareas= document.getElementById("listaTareas");
    console.log("Elemento listaTareas ", listaTareas);
    let tarea=document.createElement("div"); 
    console.log("nuevo elemento ", tarea);
    let textoTareas= prompt("Añade el texto de la tarea")
    tarea.textContent= textoTareas;
    tarea.className="tarea";
    listaTareas.appendChild(tarea);
    let boton= document.createElement("button")
    console.log(boton);
    boton.textContent= "Eliminar";
    boton.className="eliminar"
    console.log("nuevo boton eliminar tarea ", boton)
    boton.onclick= function(){
        eliminarTareas(this);
    }
    tarea.appendChild(boton);
    let botonVerde=document.createElement("button"); 
    botonVerde.textContent="Pulsa para poner en verde";
    botonVerde.className="botonVerde"
    console.log("nuevo boton para pintar tarea ", botonVerde)
    tarea.appendChild(botonVerde);

    botonVerde.onclick= function(){
        cambiarAVerde(this);
    }


}
let agregarTareas= document.getElementById("agregarTarea")
console.log("boton agregar tareas ", agregarTareas)
agregarTareas.onclick= function(){
    agregarTarea();
}
function eliminarTareas(boton) {
    let elementoPadre= boton.parentElement;
    console.log("elemento eliminado ", elementoPadre);
    elementoPadre.remove();
}
function cambiarAVerde(botonVerde) {
    let elementoPadre2= botonVerde.parentElement;
    elementoPadre2.style.backgroundColor= "green";
    console.log("Color cambiado")
}

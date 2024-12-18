let crearPerfil= document.getElementById("create_profile")

crearPerfil.onclick= function(){
    let nombreCompleto= document.getElementById("Nombre").value
    let edad=document.getElementById("Edad").value
    let descripcion= document.getElementById("Descripcion_personal").value

    console.log("Nombre completo ", nombreCompleto);
    console.log("edad ", edad);
    console.log("descripcion ", descripcion);

    let contenido= document.getElementById("profile_preview")
    contenido.innerHTML= `
    <h3>Nombre: ${nombreCompleto},${edad} años</h3>
    <p>Descripcion personal: </p>
    <p>${descripcion}</p>
    `;

    contenido.style.display= "block";
}
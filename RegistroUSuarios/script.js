// Implementa las siguientes funcionalidades (2 puntos):
// Al enviar el formulario, muestra un mensaje con los datos ingresados (puede ser en un alert, o añadiendo los datos debajo del formulario).

let formulario = document.getElementById("registerForm");
let nombre = document.getElementById("name");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let generoM = document.getElementById("generoM");

let generoF = document.getElementById("generoF");
let generoO = document.getElementById("generoO");
let movies = document.getElementById("movies");
let sports = document.getElementById("sports");
let music = document.getElementById("music");
let tech = document.getElementById("tech");
let country = document.getElementById("country");
let comments = document.getElementById("comments");


formulario.onsubmit = function (event) {
    event.preventDefault();
    nombre.value;
    email.value;

    if (String(nombre.value).trim() === '' ) {
        alert("No has introducido el nombre");
    }
    email.value;
    if ( String(email.value).trim() === '') {
        alert("No has introducido el email");
    }
    birthdate.value;
    // si ninguna de las 3 variables de genero estan marcadas, seleccionar una por defecto
    generoM.checked;
    generoF.checked;
    generoO.checked;
    // si ninguna de las 3 variables de genero estan marcadas, seleccionar una por defecto
    if (generoM.checked === false && generoF.checked === false && generoO.checked === false) {
        generoM.checked = true;
    }
    movies.checked;
    sports.checked;
    music.checked;
    tech.checked;
    country.children;
    comments.value;
}
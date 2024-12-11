console.log("Iniciando asistente...");

// let nombre = prompt("¿Cuál es tu nombre?");
// console.log("Encantado de conocerte ", nombre, "!");

let currentYear = new Date();
console.log("Valor de año actual", currentYear);

//currentYear = currentYear.getFullYear();
//console.log("Valor de año actual", currentYear);

//let userYear = prompt("¿En que año naciste?");
//console.log("Año de nacimiento del usuario: ", userYear);

//let birthday = currentYear - userYear;

//console.log("Oh, tienes", birthday," genial!");

let opcion = prompt ("¿Qué actividad quieres hacer? 1 o 2");
//
if (opcion == 1) {
    console.log("Has elegido la opción 1");

    let num1 = Number(prompt("Introduce el 1er nº"));
    let num2 = Number(prompt("Introduce el 2do nº"));
    // let resultado = Number(num1) + Number(num2);
    let operacion= prompt("que operacion deseas realizar + - * /");
    console.log(" Operacion elegida ", operacion);
    let resul=0;
    if (operacion="+") resul= num1 + num2;
    if (operacion="-")  resul= num1 - num2;
    if (operacion="*")  resul= num1 * num2;
    if (operacion="/")  resul= num1 / num2;
    
    console.log("El resultado es", resul);

    
    // let resultadoPrompt = num1 + num2;

    // console.log("La suma de los dos números es: ", resultadoPrompt);

}
else if (opcion == 2) {
    console.log("Has elegido la opción 2");

    let numRandom = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio: ", numRandom);

    for(let intentos= 3; intentos>0; intentos-- ){
        let userNumber = prompt("Escribe un número del 1 al 10");
        if (numRandom=== Number(userNumber)) {
            alert("has acertado el numero")
        }
        else{
            console.log("no es");
        }
        if (intentos===0) {
            console.log("el numero era ", numRandom);
            break;
        }
        console.log("User number:", userNumber);
    }
    

    // if (numRandom === Number(userNumber)) {
    //     alert("WOW, has acertado!!");
    // } else {
    //     console.log("Nope :(");
    // }
}
else {
    alert("Solo tenemos 2 actividades :(");
}

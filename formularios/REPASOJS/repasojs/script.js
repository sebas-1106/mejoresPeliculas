let nombre= "Cris";
const pais= "Colombia";
var color="rojo";

console.log (" nombre : "+ nombre + " pais: "+ pais + " color: "+ color);

let nombre1= "Sebastian"

let email= "acevedosebastian455@gmail.com"
let edad= 18
let fecha = "06/11/2006"
console.log(`Mi nombre es ${nombre}, soy de ${pais}, caleño de sangre, tengo ${edad} años, y mi email es ${email} y mi fecha de nacimiento es ${fecha}`);
nombre="pepe";
nombre= nombre1;

function mostrarDatos() {
    let despedida= "Hasta luego";

    console.log(`Mi nombre es ${nombre}, soy de ${pais}, caleño de sangre, tengo ${edad} años, y mi email es ${email} y mi fecha de nacimiento es ${fecha}. ${despedida}`

    );
    return despedida;
}

let nuevaVar= mostrarDatos();
console.log (nuevaVar);

let suma= 8+8;
suma++;
console.log("Operacion resultado"+ suma);
console.log("Operacion resultado"+ suma++);
console.log("Operacion resultado ++ antes", ++suma);

suma +=6;
console.log("Operacion resultado +=", suma);

function sumaNumeros() {
    let num1= prompt("Dime un numero");
    let num2= prompt("Dime otro numero");
    // let num1= Number(prompt("Dime un numero"));
    // let num2= parseInt(prompt("Dime otro numero"));
    let resultado= parseInt(num1) + parseInt(num2);
    alert("El resultado de la suma es: "+ resultado);
}
sumaNumeros();

function menuCalculadora() {
    let num1= 40
    let num2= 20
    let resultado;
    let respuestaUsuario= prompt("¿Que operacion deseas realizar (+, -, *, /)?");

    switch (respuestaUsuario) {
        case "+":
            resultado= num1 + num2;
            alert("El resultado de la suma es: "+ resultado);
            break;
        case "-":
            resultado= num1 - num2;
            alert("El resultado de la resta es: "+ resultado);
            break;
            case "*":
                resultado= num1 * num2;
                alert("El resultado de la multiplicacion es: "+ resultado);
            break;
            case "/":
                resultado= num1 / num2;
                alert("El resultado de la division es: "+ resultado);
            break;
        default:
            alert("Caracter incorrecto");
            break;
    }
}
menuCalculadora();
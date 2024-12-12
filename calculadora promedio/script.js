// si el usuario introduce 1, 2 --> ok
// si el usuario introduce "" --> Error: no has introducido ningun numero
//si el usuario no lo separa por comas: Error: los elementos deben estar separados por comas
// si el usuario introduce los numeros como palabras ->error: has introducido un elemento que no es un numero
function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: El input debe ser un array no vacío.";
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== "number" || numeros[i].isNaN(numeros[i]) ) {
            return `Error: El elemento en la posición ${i+1} no es un número.`;
        }
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Evento para calcular el promedio
let calculo = document.getElementById("calcular");

calculo.onclick = function () {
    //Recuperar el valor del input
    const input = document.getElementById("numeros").value;

    if (input.length === 0) {
        alert("Oye no has introducido nada")

    }else if (input.includes(",") || input.includes("-") || input.includes("?") ) {
        alert(" Es necesario separar los elementos por comas(,)");
    }
    else{
        const numeros = input.split(",");
        const decimales= numeros.map(num => parseFloat(num.trim()));
    const resultado = calcularPromedio(decimales);
     // Mostrar el resultado y registrar en consola
     console.log("Resultado calculado:", resultado);
     resultado.innerText= resultado;
 }
    }
    document.getElementById("resultado").innerText = resultado;

    

   
//si el usuario ingresa una cadena de texto, se arrojara un mensaje de error
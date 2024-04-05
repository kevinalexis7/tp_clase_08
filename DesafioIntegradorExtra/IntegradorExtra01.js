/* Función: Encontrar el Número */

let arrayDeNumeros = [34,5,67,47,48,56,8,57,56,7]

function encontrarNumero(arrayDeNumeros, numeroBuscado){
    arrayDeNumeros.includes(numeroBuscado) ? console.log(`El número ${numeroBuscado} si existe en el array`) : console.log(`El valor solicitado no existe`);
}

encontrarNumero(arrayDeNumeros, +process.argv[2])
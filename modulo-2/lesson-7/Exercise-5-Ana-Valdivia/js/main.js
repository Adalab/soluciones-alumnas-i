'use strict'

// a) Vamos a crear un nuevo array numbers que contendrá números.
// Vamos a recorrer el array mediante un bucle para calcular la media
// de los números. Necesitaremos una variable (acumulador) para ir almacenando
// la suma de todos los números y después poder hacer la media.

// let numNumbers = 6;
// let numbers = [2,7,5,4,8,12];
// var acc = 0;

// for (let i = 0; i <= (numNumbers-1); i++) {
    
//     acc = acc + numbers[i];
// }

// let result = acc/numNumbers;
// console.log('La media es: ' + result);

// Vamos a generalizar el código anterior creando una función average.
// Esta función toma como parámetro un array numbers, calula la media del array
// (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays
// de cualquier longitud, deberemos consultar la longitud del array mediante su
// propiedad length. Para comprobar que la función hace el cálculo correcto,
// la loguearemos varias veces pasándole como argumento un array con diferente
// longitud cada vez y mostraremos el resultado en la consola del navegador.

let numbers1 = [2,7,5,4,8,12];
let numbers2 = [0,3,35,14];
let numbers3 = [22,17,55,44,8,12,55,34];


function average(numberArray) {
    let acc = 0;
    let size = numberArray.length;
    //for (let i = 0; i < numNumbers; i++) { // Ambas opciones son válidas
    for (let i = 0; i <= (size-1); i++) {
        acc = acc + numberArray[i];
    }
    let result = acc/size;
    console.log('La media es: ' + result);
}

average(numbers1);
average(numbers2);
average(numbers3);



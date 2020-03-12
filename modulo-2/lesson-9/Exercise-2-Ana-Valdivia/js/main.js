'use strict'

// Vamos a crear una nueva función getReversed100Numbers que llama a
// la función del ejercicio anterior para obtener 100 números y
// los cambia de orden. Para comprobar que los tenemos todos, vamos
// a ejecutar la función y a loguearlos uno a uno en la consola en orden.

let arrayNumbers = [];
const maxValueArray = 100;
let acc = 0;

function get100Numbers() {
  
    for (let i = 0; i < maxValueArray; i++) {
        acc++;
        arrayNumbers.push(acc);
    }    
}

function getReversed100Numbers(array) {

    console.log(array.reverse());
}

get100Numbers();
getReversed100Numbers(arrayNumbers);
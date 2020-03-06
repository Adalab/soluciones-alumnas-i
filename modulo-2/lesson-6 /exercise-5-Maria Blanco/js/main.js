'use strict';
// Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.
// Nota: cuando logueamos un objeto en la consola, a su izquierda aparece un triangulo que nos permite desplegarlo para ver sus métodos y propiedades.

let name = document.querySelector('.name');
// const buttonElem = document.querySelector ('.button');

console.dir (name);

// function alertText(event){

//    name = document.querySelector('.name').value;
//    // console.log (`Hola ${name}`);
//    console.log(event);
// }

// buttonElem.addEventListener('click',alertText);




// 'use strict';

// const text = document.querySelector('.text');
// const button = document.querySelector('.button');

// button.addEventListener('click',() => text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!' );
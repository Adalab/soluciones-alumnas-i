'use strict'

// Usando for...of vamos a hacer un pequeño programa que 
// le pregunte a la usuaria cuáles son sus dos películas o
// libros favoritos mediante un formulario. Cuando pulse el
// botón enviar guardaremos la información en un array,
// lo recorreremos y mostraremos este mensaje por cada obra:
// "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.",
// donde OBRA será el nombre de la obra.

const movieInput1 = document.querySelector('#movieInput1');
const movieInput2 = document.querySelector('#movieInput2');
const button = document.querySelector('#login-button');

function sendInfo() {
    const iterable = [movieInput1.value,movieInput2.value];

    for (const obra of iterable) {
        console.log(`"A mi tambien me encantó ${obra}"`);
    }
}

button.addEventListener('click',sendInfo)
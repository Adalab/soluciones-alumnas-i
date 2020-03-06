'use strict';

// Crear una página HTML con un párrafo con lorem ipsum. 
// Al poner el ratón sobre el párrafo, vamos a añadir un
// nuevo párrafo a la página con lorem ipsum.

const text = document.querySelector('#text');
const addingText = text.innerHTML;
var max = 0;

function duplicateText() {
    if (max < 3) {
        max++; //max = max + 1;
        text.innerHTML = text.innerHTML + addingText;
    }
}

text.addEventListener('mouseover', duplicateText);
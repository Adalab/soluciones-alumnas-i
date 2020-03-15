'use strict';

// Crear una página con un input de texto y un párrafo vacío. 
// Cada vez que la usuaria escriba una letra tenemos que recoger
// el valor del input al que le pusimos el listener y escribirlo en el párrafo.

const input = document.querySelector('.input');
const textInput = document.querySelector('.text');

function getValue() {
  textInput.innerHTML = event.currentTarget.value;
}

input.addEventListener('keyup', getValue);
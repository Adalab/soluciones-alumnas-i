'use strict';

// Crear una página HTML con un input de tipo texto
// para introducir tu nombre y un botón. Al pinchar 
// sobre el botón, imprimir en la consola el mensaje
// 'Hola {nombre}', con el nombre que aparece en el
// input de texto.

const button = document.querySelector('#button');
const inputName = document.querySelector('#input-name');

function showAlert() {
  let name = inputName.value;
  console.log(`Hola ${name}`);
}

button.addEventListener('click', showAlert);
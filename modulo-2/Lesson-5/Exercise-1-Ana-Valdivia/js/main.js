'use strict';

// Crear una página HTML con un párrafo en el que
// ponga Hola y un botón. Cuando se pulse el botón
// hay que cambiar ese texto por "Mi primer click.

const button = document.querySelector('.button');
var text = document.querySelector('.text');

function showAlert() {
    text.innerHTML = "Mi primer click";
}

button.addEventListener('click', showAlert);

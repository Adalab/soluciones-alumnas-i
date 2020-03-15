'use strict';

const nameElem = document.querySelector('.nameInput');
const textP = document.querySelector('.paragraph');

function printParagraph() {
  localStorage.setItem('name', nameElem.value);
  textP.innerHTML = nameElem.value;
}

function getParagraph() {
  textP.innerHTML = localStorage.getItem('name');
}

nameElem.addEventListener('keyup', printParagraph);
window.addEventListener('load', getParagraph);

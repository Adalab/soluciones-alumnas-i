'use strict';

const nameElem = document.querySelector('.nameInput');
const surnameElem = document.querySelector('.surnameInput');
const textP = document.querySelector('.paragraph');

let fullName = {};

function printParagraph() {
  fullName.name = nameElem.value;
  fullName.surname = surnameElem.value;

  localStorage.setItem('localFullname', JSON.stringify(fullName));
  textP.innerHTML = `${nameElem.value} ${surnameElem.value}`;
}

function getParagraph() {
  var tempObject = JSON.parse(localStorage.getItem('localFullname'));
  textP.innerHTML = tempObject.name + ' ' + tempObject.surname;
}

nameElem.addEventListener('keyup', printParagraph);
surnameElem.addEventListener('keyup', printParagraph);
window.addEventListener('load', getParagraph);

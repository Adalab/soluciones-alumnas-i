'use strict';
/*
  Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
  Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
  Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
*/

const CONTAINER = document.querySelector('.js-div');
let textTitle = '';
let textMensage = '';

if (CONTAINER.classList.contains('warning')) {
  textTitle = 'AVISO';
  textMensage = 'Tenga cuidado';
} else if (CONTAINER.classList.contains('error')) {
  textTitle = 'ERROR';
  textMensage = 'Ha surgido un error';
} else if (CONTAINER.classList.contains('sucess')) {
  textTitle = 'CORRECTO';
  textMensage = 'Los datos son correctos';
}
CONTAINER.querySelector('.js-title').innerHTML = textTitle;
CONTAINER.querySelector('.js-text').innerHTML = textMensage;

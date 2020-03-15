'use strict';

const button = document.querySelector('.js-button');
const urlBase = 'https://api.rand.fun/number/integer?max=100';
const resultContainer = document.querySelector('.js-result');

function getNumber() {
  fetch(urlBase)
    .then(response => response.json())
    .then(data => {
      resultContainer.innerHTML = data.result;
    });
}

button.addEventListener('click', getNumber);

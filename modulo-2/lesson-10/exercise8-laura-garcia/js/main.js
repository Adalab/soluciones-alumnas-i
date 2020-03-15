'use strict';

function getNumber() {
  fetch('https://api.rand.fun/number/integer?max=100')
    .then(response => response.html())
    .then(data => {
      document.querySelector(
        '.js-result'
      ).innerHTML = data.result.catch(error =>
        console.log(`Ha sucedido un error: ${error}`)
      );
    });
}

document.querySelector('.js-number').addEventListener('click', getNumber());

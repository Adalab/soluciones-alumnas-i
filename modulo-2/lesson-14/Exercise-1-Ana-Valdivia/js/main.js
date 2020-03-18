'use strict'

// Vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);






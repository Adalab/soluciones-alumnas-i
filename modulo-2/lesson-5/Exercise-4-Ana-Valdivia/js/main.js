'use strict';

// Cambiar el color de fondo de la página cuando se haga scroll.
// Cuando la posición del scroll vertical supere 250 píxeles
// poner un color de fondo, cuando sea inferior a 250 píxeles poner otro. 

const container = document.querySelector('.container');

function changeColor() {
  if (window.scrollY < 250) {
     container.classList.add('blue');
     container.classList.remove('yellow');
  } else {
    container.classList.add('yellow');
    container.classList.remove('blue');
  }
}

window.addEventListener('scroll', changeColor);
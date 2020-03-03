'use strict';
let name = 'Rosanna';
if (name === 'Marta' || name === 'Rosanna') {
  document.querySelector('.user__name').innerHTML = `Bienvenida ${name}`;
} else {
  document.querySelector('.user__name').innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}

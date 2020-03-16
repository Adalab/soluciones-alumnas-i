'use strict'

// Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3
// elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li,
// que corresponden al contenido del array. Usaremos los métodos avanzados para
// manipular el DOM, no innerHTML.

const numbers = [1, 2, 3];

const list = document.querySelector('.list');

for (let i = 0; i < 3; i++){
  let item = document.createElement('li');
  let newContent = document.createTextNode(numbers[i]);
  item.appendChild(newContent);
  list.appendChild(item);
}



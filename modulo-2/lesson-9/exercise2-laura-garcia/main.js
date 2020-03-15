'use strict';

const myArray = [];

function get100numbers() {
  const arrLength = 100;

  for (let i = 0; i < arrLength; i++) {
    myArray.push(i + 1);
  }

  return myArray;
}

function getReversed100Numbers() {
  return myArray.reverse();
}

console.log(get100numbers());
console.log(getReversed100Numbers());

/* ** Funciones con parámetros **


function getNumbers(arrLength) {
    const myArray = [];
    for (let i = 0; i < arrLength; i++) {
        myArray.push(i + 1);
    }
    return myArray;
};


function getReversedNumbers(array) {
    return array.reverse();
}


const reverseArray = getReversedNumbers(getNumbers(100));

console.log(reverseArray);
 */

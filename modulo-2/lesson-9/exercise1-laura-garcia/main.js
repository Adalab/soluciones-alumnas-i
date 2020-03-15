'use strict';

let acc = 0;

function get100numbers() {
  const arr = [];
  const arrLength = 100;

  for (let i = 0; i < arrLength; i++) {
    acc++;
    arr.push(acc);
  }

  return arr;
}

console.log(get100numbers());

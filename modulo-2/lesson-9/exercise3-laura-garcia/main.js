'use strict';

function bestLostNumber() {
  const lostNumbers = [4, 8, 15, 16, 23, 42];
  const evenArray = [];
  const multipleArray = [];

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 == 0) {
      evenArray.push(lostNumbers[i]);
    }

    if (lostNumbers[i] % 3 == 0) {
      multipleArray.push(lostNumbers[i]);
    }
  }

  return evenArray.concat(multipleArray);
}

console.log(bestLostNumber());

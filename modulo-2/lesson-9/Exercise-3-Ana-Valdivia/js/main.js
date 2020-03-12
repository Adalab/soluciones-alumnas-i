'use strict'

// Vamos a crear una función bestLostNomber que nos devuelve algunos números del array.
// La función, debe seguir estos pasos:
// 1.Crear un nuevo array que contiene solo los números pares que hay en lostNumbers.
// Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers
// para al encontrar un número par, meterlo en el nuevo array.
// 2. Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers,
// de una forma similar al anterior.
// 3. Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los
// números pares y luego los múltiplos de 3. Para comprobar que los tenemos todos, vamos a
// ejecutar la función y a loguearlos uno a uno en la consola en orden.

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber(array) {
  let arrayPar = [];
  let array3 = [];
  let finalArray = [];

  for (const element of array) {
    if (element % 2 === 0) {
      arrayPar.push(element);
    }

    if (element % 3 === 0) {
      array3.push(element);
    }
  }

  finalArray = arrayPar.concat(array3);

  console.log(arrayPar);
  console.log(array3);
  console.log(finalArray);
}

bestLostNumber(lostNumbers);




/* El primer año de un perro equivale a 15 años de humano
        El segundo año de un perro equivale a nueve años de humano
        A partir del tercero, cada año de perro equivale a 5 años de humano. */
'use strict';
const oneYear = 15;
const secondYear = 9;
const thirdYear = 5;
const dogYears = 5;

if (dogYears === 1) {
  console.log(oneYear + ' años humanos');
} else if (dogYears === 2) {
  console.log(oneYear + secondYear + ' años humanos');
} else if (dogYears === 3) {
  console.log(oneYear + secondYear + thirdYear + ' años humanos');
} else if (dogYears > 3) {
  //sumamos los valores hasta 3 años + (edad perro - 3 primeros años) * (5 años)
  let yearsHuman = oneYear + secondYear + thirdYear + (dogYears - 3) * thirdYear;
  console.log(yearsHuman + ' años humanos');
}

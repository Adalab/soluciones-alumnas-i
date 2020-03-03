'use strict';
const hoursYear = 365 * 24;
const userAge = document.querySelector('.user__age').innerHTML;
const yearsToRetirement = 67 - parseInt(userAge);
const hoursJubilate = hoursYear * yearsToRetirement;
console.log(`Te quedan ${yearsToRetirement} años para jubilarte`);
console.log(`Te quedan ${hoursJubilate} horas para jubilarte`);

'use strict';
const totalPerson = 9;
const totalPay = 128;

let totalForPerson = totalPay / totalPerson - 2;
let totalAna = totalForPerson + 2;
let text = 'Cada persona paga ';
let textAna = 'Ana paga ';
console.log(text + totalForPerson + '€');
console.log(textAna + totalAna + '€');

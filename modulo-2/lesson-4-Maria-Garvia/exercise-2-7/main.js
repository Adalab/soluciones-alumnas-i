'use strict';

// EJERCICIO 1 "Multiplicador"
let number1 = 2;
let number2 = 3;

function multiply (number1,number2) {
    return number1 * number2;
};

const result = multiply(number1,number2);
console.log(result);


// EJERCICIO 2 "Función media"
let a = 2; 
let b = 4; 
let c = 6; 
let d = 8;

function calculateMedia (a , b , c , d) {
    return (a + b + c + d) / 4;
}

const resultCalculateMedia = calculateMedia (a,b,c,d);

console.log('El resultado de la calculadora de medias es:',resultCalculateMedia);


// EJERCICIO 3 "Ticket con IVA"
let pvp = 1400;

function calculatePrice (pvp) {
    return (`El precio sin IVA: ${pvp * 0.79}, El IVA: ${pvp * 0.21}, El precio total: ${(pvp* 0.79)+(pvp * 0.21)}`)}

    const resultcalculatePrice = calculatePrice (pvp);

    console.log('El resultado de la calculadora de IVA es:',resultcalculatePrice);


// EJERCICIO 4 "Pares o nones"
let number = 59;

function isItpair (number) {
    if (number % 2 === 0) {
        return ('El número es par')
    } else {
        return ('El número es impar')
    }
}

const resultIsItPair = isItpair (number);

console.log('El resultado de la función de pares o nones es:', resultIsItPair);


// EJERCICIO 5 "QuerySelector para todas"
function getEl (selector) {
    return (document.querySelector(selector));
}

const element1 = getEl('.element1');
element1.innerHTML = 'Mery';
const element2 = getEl('.element2');
element2.innerHTML = 'tenía un'
const element3 = getEl('.element3').innerHTML = 'corderito';
const elementsBox = getEl('.querySelectorExercise').classList.add('element2');

console.log('Ejercicio 5', element1, element2, element3);


// EJERCICIO 6 "Logueando errores"
function getElement (selector) {
    const element = document.querySelector(selector);
    if (element === null) {
        alert(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    } else {
        return element
    }
}

const titleExercise6 = getElement ('.ex6').innerHTML = 'Logueando errores';

console.log ('Ejercicio 6', titleExercise6)


// EJERCICIO 7 "Combinando funciones"
// En este ejercicio se usan las funciones de getElement & isItpair
const Exercise7 = parseInt(getElement ('.ex7').innerHTML);
const resultEx7 = isItpair (Exercise7);

console.log('Ejercicio 7', Exercise7, resultEx7);


//EJERCICIO 8 "Variables globales vs Variables locales"
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log('Ejercicio 8.1', secretLetter);
console.log('Ejercicio 8.2', mySecretLetter());


// EJERCICIO 9 "Arrow functions everywhere"

// función function calculateMedia (a , b , c , d) {
//      return (a + b + c + d) / 4;
// }

const arrowCalculateMedia = (a,b,c,d) => (a+b+c+d)/4;
console.log('Ejercicio 9.1 Media:', arrowCalculateMedia(2,4,6,8));

//function calculatePrice (pvp) {
//      return (`El precio sin IVA: ${pvp * 0.79}, El IVA: ${pvp * 0.21}, El precio total: ${(pvp* 0.79)+(pvp * 0.21)}`)
// }

const arrowCalculatePrice = (pvp) => (`El precio sin IVA: ${pvp * 0.79}, El IVA: ${pvp * 0.21}, El precio total: ${(pvp* 0.79)+(pvp * 0.21)}`);
console.log('Ejercicio 9.2 IVA:', arrowCalculatePrice(1400));

//function isItpair (number) {
//     if (number % 2 === 0) {
//         return ('El número es par')
//     } else {
//         return ('El número es impar')
//     }
// }

const arrowIsItPair = (number) => {if (number % 2 === 0) {return 'El número es par'} else {return 'El número es impar'}};
console.log('Ejercicio 9.3 Pares o nones:', arrowIsItPair(59))

// function getEl (selector) {
//     return (document.querySelector(selector));
// }

const arrowGetEl = (selector) => document.querySelector(selector);
console.log('Ejercicio 9.4 getEl:', arrowGetEl('.element1'), arrowGetEl('.element2'), arrowGetEl('.element3'))

//function mySecretLetter() {
//     secretLetter = 'x';
//     return secretLetter;
//   }

const arrowMySecretLetter = (secretLetter) => secretLetter;
console.log('Ejercicio 9.5 secretLetter:', arrowMySecretLetter(secretLetter));


// EJERCICIO 10 "Calculador de modelo de caja"
function borderBoxFunction (borderBox,width,padding,border) {
    if (borderBox) {
        console.log(`Ejercicio 10: El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width}px`)
    } else {
        console.log(`Ejercicio 10: El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width + padding + border}px`)
    }
}

const borderBoxReturn = borderBoxFunction (true , 100 , 10 , 2);

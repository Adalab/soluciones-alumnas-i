'use strict'

// Cada 3 años se produce una luna llena completamente iluminada
// por el Sol durante unos minutos. Esta luna es conocida como
// la “Luna del cazador”. En el año 2017 se pudo ver esta luna
// el 5 de octubre y mucha gente se la perdió. Para que no nos
// pase los siguientes años vamos a crear un código que muestre
// en consola cuándo serán las 15 próximas lunas.

let moon = 2017;

for (let acc = 0; acc < 15; acc++){
  moon = moon + 3;
  console.log('La próxima luna del cazador será en el año: ' + moon);
}


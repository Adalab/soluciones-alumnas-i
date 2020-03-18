'use strict'

/* Encuentra el usuario
a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232.
¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.];

b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.
 */

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
] 

//Resultado: Nombre del usuario con incidencia
const issueUser = users.find(name => name.pin === 5232);
console.log(issueUser.name);

//Resultado: array sin el usuario con incidencia.
const index = users.findIndex(name => name.pin === 5232);
users.splice(index,1);

console.log(users);
'use strict';
// ;Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
// Número máximo de peras
// Número mínimo de peras
// Número actual de peras
// Número inicial de peras
// Y varios métodos que hagan:
// Añadir al cesto una pera
// Sacar del cesto una pera
// Restablecer el número de peras al valor inicial.
// Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.

const pears = {
    maxnumber: 50,
    mixnumber: 10,
    currentnumber: 5,
    initial: 0,

    add: function () {
        if (this.currentnumber < this.maxnumber) {
            return this.currentnumber += 1;
        }
    },
    sub: function () {

        this.currentnumber = this.currentnumber - 1;
        return this.currentnumber - 1;
    },
    reset: function () {
        this.currentnumber = this.initial;
        return this.initial;

    },
}

let pearsQuanty = pears.add();
let pearsSub = pears.sub();
let pearsReset = pears.reset();


console.log (`Estamos aumentando ${pearsQuanty}`);
'use strict';

// Vamos a mejorar nuestra calculadora geométrica sencilla. En el programa definiremos la clase Square, que tendrá al menos:
// Un atributo para la longitud del lado (side) del cuadrado
// Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados - 4)
// Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

class Square {
    constructor(side) {
        this.side = side;
      }

    perimeter(){
        return this.side * 4;
    }

    area(){
        return this.side * this.side;
    }
}

const mySquare1 = new Square(1);
const mySquare2 = new Square(3);
const mySquare3 = new Square(7);

console.log(`El cuadrado1 tiene un perimetro de ${mySquare1.perimeter()}cm y un area de ${mySquare1.area()}cm2`);
console.log(`El cuadrado2 tiene un perimetro de ${mySquare2.perimeter()}cm y un area de ${mySquare2.area()}cm2`);
console.log(`El cuadrado3 tiene un perimetro de ${mySquare3.perimeter()}cm y un area de ${mySquare3.area()}cm2`);

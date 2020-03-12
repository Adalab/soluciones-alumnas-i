'use strict'

function workWithMovie() {
    let movies = ['Desayuno con diamantes','Piratas del Caribe','La la land'];
    movies[3] = 'El Señor de los anillos';
    console.log(movies);

    movies[3]= 'Love actually';
    console.log(movies);

    movies[0]= 'Los Vengadores.End game';
    console.log(movies);
}

workWithMovie();

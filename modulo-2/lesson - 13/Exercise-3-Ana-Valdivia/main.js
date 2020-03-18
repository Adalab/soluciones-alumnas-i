'use strict'

// Queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación.
// Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar
// en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si
// son usuarios premium o no. Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];

function getGreatingsFinal(element){
    let output = `Bienvenida ${element.name}.`;
    if (element.isPremium === true){
        output += `. Gracias por confiar en nosotros.`;
    }
    return output;
}
const greetingsResult = users.map(getGreatingsFinal);

console.log(greetingsResult);


//SOLUCIÓN MENOS LIMPIA:
// const getGreetings = user => `Bienvenida ${user.name}.`;
// const getGreetingsP = user => `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;

// const greetingsNormal = users.filter(name => name.isPremium === false).map(getGreetings);
// const greetingsPremium = users.filter(name => name.isPremium === true).map(getGreetingsP);
// const greetingsResult = greetingsNormal.concat(greetingsPremium);
  

 
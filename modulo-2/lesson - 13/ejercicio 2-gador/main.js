const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greet = name => `Bienvenida ${name}`

const greetUsers = names.map(greet);

console.log(greetUsers);
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];


let normalUsers = [];
let premiumUsers = [];

console.log(users[0].isPremium);

for (let user of users){

// for (i=0; i<= users.length; i++){
    if(user.isPremium === false){
        normalUsers.push(user.name)
     

    } else{
        premiumUsers.push(user.name);
    }
}

const greet = name => `Bienvenida ${name}`
greetingUsers = normalUsers.map(greet);

const greetPremiumUsers = name => `Bienvenida ${name}. Gracias por confiar en nosotros.`
greetingPremiumUsers = premiumUsers.map(greetPremiumUsers);
        


const greetAll = greetingUsers.concat(greetingPremiumUsers);



console.log(greetAll);
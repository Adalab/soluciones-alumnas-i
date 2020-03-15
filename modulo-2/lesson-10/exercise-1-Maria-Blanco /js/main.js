'use strict';
// a) Vamos a modificar el ejemplo anterior para que las fotos de nuestra página salgan sólo perros de la raza Chihuahua.
// b) Vamos a encapsular toda la lógica para crear una petición en una función. Añadimos un botón a la página con el título 'Enséñame otro Chihuahua' de forma que al pulsarlo se haga otra petición al servidor de una imagen aleatoria y aparezca una nueva imagen de Chihuaua.

function getDogImage() {
  fetch("https://dog.ceo/api/breed/Chihuaha/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un Chihuaha";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

function getDotImage2 (){
fetch ("https://dog.ceo/api/breed/Chihuaha/images/random")
.then (response => response.json())
.then (data => {
  const img = document.querySelector(".show");
      img.src = data.message;
      img.alt = "Otro Chihuaha";
    });
    
}
  
  const btn2 = document.querySelector (".js-dog2");
  btn2.addEventListener("click", getDotImage2);

'use strict';
// Preparar un input  con un botón para que la usuaria introduzca la organización.
// Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
// Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
// En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio)

function getOrgs() {
  const URL = "https://api.github.com/orgs/" + input.value;
  const elementUlList = document.querySelector('.list');


  fetch(URL)

    .then(response => response.json())
    .then(data => {
      const repoURL = data.repos_url;
      return fetch(repoURL);
    })
    .then (responseRepo => responseRepo.json())
    .then (dataRepo => {

for (let repo of dataRepo){

  elementUlList.innerHTML += `<li>${repo.name}</li>`;
 
}
})
}

const input = document.querySelector ('.name');
const btn = document.querySelector('.button');
btn.addEventListener("click",getOrgs);
'use strict';

// Mostrar el listado completo de repositorios de una organización

//Preparar un input  con un botón para que la usuaria introduzca la organización.

// https://api.github.com/orgs/Adalab/repos

//Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.

//Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.

//En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).

const reposAdalab = document.querySelector('.repoList');

function getOrgName() {
  let nameOrg = document.querySelector('.orgInput').value;

  fetch('https://api.github.com/orgs/' + nameOrg)
    .then(response => response.json())
    .then(data => {
      data.repos_url;
      return fetch(data.repos_url);
    })
    .then(repos => repos.json())
    .then(dataRepo => {
      for (let item of dataRepo) {
        reposAdalab.innerHTML += `<li>${item.name}</li>`;
      }
    });
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getOrgName);

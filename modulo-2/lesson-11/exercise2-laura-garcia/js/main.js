'use strict';

//necesitamos data.name y data.gender

const urlBase = 'https://swapi.co/api/people/';
const inputValue = document.querySelector('.inputPeople');

function getPeopleStarWars() {
  const people = inputValue.value;

  fetch(`${urlBase}?search=${people}`)
    .then(response => response.json())
    .then(data => {
      const characters = data.results;
      let list = document.querySelector('.listResult');

      for (let character of characters) {
        list.innerHTML += `<li>Name: ${character.name}. Gender: ${character.gender}</li>`;
      }
    });
}

const btn = document.querySelector('.searchButton');
btn.addEventListener('click', getPeopleStarWars);

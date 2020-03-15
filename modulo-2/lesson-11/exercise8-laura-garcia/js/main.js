'use strict';

const urlBase = 'https://swapi.co/api/people/';
const inputValue = document.querySelector('.inputPeople');
let list = document.querySelector('.listResult');

function getPeopleStarWars() {
  const people = inputValue.value;

  if (localStorage.getItem(people) !== null) {
    list.innerHTML += localStorage.getItem(people);
  } else {
    fetch(`${urlBase}?search=${people}`)
      .then(response => response.json())
      .then(data => {
        const characters = data.results;

        for (let character of characters) {
          list.innerHTML += `<li>Name: ${character.name}. Gender: ${character.gender}</li>`;

          localStorage.setItem(
            people,
            `<li>Name: ${character.name}. Gender: ${character.gender}</li>`
          );
        }
      });
  }
}

const btn = document.querySelector('.searchButton');
btn.addEventListener('click', getPeopleStarWars);

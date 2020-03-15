'use strict';
const ulElemen = document.querySelector('.dogList');
const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages () {
  const promises = [];
  for (let i=0; i<25;i++){
    promises[i] = createPromise();
  }


  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
        ulElemen.innerHTML += `<li><img  src="${responses[i].message}" alt="Dog"></li>`;
      }
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);
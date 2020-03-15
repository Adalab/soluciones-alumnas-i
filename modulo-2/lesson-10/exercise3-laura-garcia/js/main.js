'use strict';

const elementInput = document.querySelector('.usersInput');

function getUserInfo() {
  const user = elementInput.value;

  console.log(user);

  fetch('https://api.github.com/users/' + user)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let name = document.querySelector('.nameResult');
      name.innerHTML = data.login;
      let img = document.querySelector('img');
      img.src = data.avatar_url;
      img.alt = 'Avatar de usuario';
      let numberOfRepositories = document.querySelector(
        '.numberOfRepositories'
      );
      numberOfRepositories.innerHTML = data.public_repos;
    });
}

const btn = document.querySelector('.submitButton');
btn.addEventListener('click', getUserInfo);

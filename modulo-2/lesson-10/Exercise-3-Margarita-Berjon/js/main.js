function getResult(ev) {
  const username = ev.target.parentElement.querySelector('#js-input-name').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      //Los parámetros los cojo de los datos que devuelve el servidor https://api.github.com/users/gootyfer
      paintHTML(data.login, data.avatar_url, data.public_repos);
    });
}
//Pinta en pantalla cada elemento que pido en los parámetros de arriba al sevidor. (data.login =name , data.avatar_url = src, data.public_repos = repositories)
function paintHTML(name, src, repositories) {
  document.querySelector('.js-name').innerText = name;
  document.querySelector('.js-image').src = src;
  document.querySelector('.js-repositories').innerText = repositories;
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getResult);

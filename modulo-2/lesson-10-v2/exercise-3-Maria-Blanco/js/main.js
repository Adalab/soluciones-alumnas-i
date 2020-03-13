'use strict';
// Vamos a jugar un poco con el código del ejemplo anterior. Mirando la documentación de 'rand.fun', vamos a pedir un número entero (integer).
// Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20

function getUsers() {
  const URL = "https://api.github.com/users/" + input.value;

  fetch(URL)

    .then(response => response.json())
    .then(data => {
      login.innerHTML = data.login;
      avatar.src = data.avatar_url;
      avatar.alt = 'usuario';
      reposNumber.innerHTML = data.public_repos;

    });
}

const reposNumber = document.querySelector('#reposNumber');
const avatar = document.querySelector('.img_avatar');
const login = document.querySelector('#userName');
const input = document.querySelector ('.name');
const btn = document.querySelector('.button');
btn.addEventListener("click", getUsers);
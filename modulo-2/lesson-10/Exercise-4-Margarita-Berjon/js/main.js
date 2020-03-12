function getResult(ev) {
  const orgname = ev.target.parentElement.querySelector('#js-input-name').value;
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then(response => response.json())
    .then(data => {
      return fetch(data.repos_url);
    })
    .then(response => response.json())
    .then(list => {
      paintRepoList(list);
    });
}

function paintRepoList(list) {
  const ul = document.querySelector('ul');
  for (const item of list) {
    const li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
  }
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getResult);

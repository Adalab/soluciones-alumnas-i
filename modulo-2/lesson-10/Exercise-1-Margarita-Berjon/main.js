function getNumber() {
  fetch('https://api.rand.fun/number/integer?max=100')
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.result;
    });
}
document.body.addEventListener('click', getNumber);

function getPassword() {
  fetch('https://api.rand.fun/text/password?length=20')
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.result;
    });
}
document.body.addEventListener('click', getPassword);

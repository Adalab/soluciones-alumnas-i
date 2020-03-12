function getChihuahuaImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'un perro de raza chihuahua';
    });
}

const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getChihuahuaImage);

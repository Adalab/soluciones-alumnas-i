'use strict'

// Para estar preparados, vamos a crear un contador de uvas. Este contador empezará en 0
// y cada segundo incrementará en 1, así hasta 12, en ese momento terminará la cuenta y se dejará de contar más.
// La cuenta se mostrará en la pantalla con números y si lo deseas puedes añadir una imagen de una uva cada vez
// que pase un segundo. PISTA: la función se puede seguir ejecutando con setInterval pero para que se pare en 12
// basta con dejar de pintar en el HTML en el momento adecuado.

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  let imageContainer = document.querySelector('.container');

  if (counter <= 12){
    time.innerHTML = counter;

    // Forma de hacerlo con innerHTLM
    //imageContainer.innerHTML += `<img class="img" src="https://preview.free3d.com/img/2016/07/1870534558147938215/tnhyklcn-900.jpg">`;

    //Forma de hacerlo con DOM
    const newImg = document.createElement('img');
    imageContainer.appendChild(newImg);
    newImg.src = "https://preview.free3d.com/img/2016/07/1870534558147938215/tnhyklcn-900.jpg";
    newImg.classList.add('img');
  }
}

setInterval(incrementAndShowCounter, 1000);

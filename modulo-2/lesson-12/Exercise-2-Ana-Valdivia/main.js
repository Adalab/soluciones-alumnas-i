'use strict'

// Crea una página que contenga tres imágenes, usando un select de formulario
// pregúntale a la usuaria qué ciudad quiere visitar. Si la usuaria elige Madrid,
// haz que en cada imagen se muestre una foto de Madrid. Haz lo mismo para París
// y Nueva York. Nota: Usa imágenes que encuentres por Internet.

let image1 = document.querySelector('#img1');
let image2 = document.querySelector('#img2');
let image3 = document.querySelector('#img3');

const inputCheck = document.querySelector('select');

function changeImages(event) {
  if (event.currentTarget.value === 'madrid'){
    image1.setAttribute('src','https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/Madrid_undia_1397223554.735.jpg?itok=FshHM2Gd');
    image2.setAttribute('src','https://pesweb.azureedge.net/spimg/hotelbannerimages/pestana-plaza-mayor-madrid-banner-1-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=1440&h=780&mode=crop&anchor=bottomcenter');
    image3.setAttribute('src','https://img.itinari.com/activity/images/original/a1c504b9-b873-430a-a266-5eb17fa9e0c5-istock-492120686.jpg?ch=DPR&dpr=1&w=1200&h=800&s=a2e2fce651fe12251217a9c16860ae95');
  } else if (event.currentTarget.value === 'paris'){
    image1.setAttribute('src','https://cdn.pariscityvision.com/library/image/4094.jpg');
    image2.setAttribute('src','https://www.instyle.es/medio/2019/04/16/catedral-de-notre-dame_d7a52487_1280x720.jpg');
    image3.setAttribute('src','https://fotos01.deia.eus/2020/03/14/690x278/louvre.jpg');
  } else if (event.currentTarget.value === 'roma'){
    image1.setAttribute('src','https://mamby.com/images/sky-outdoor-cloud-94793_maxres.jpg');
    image2.setAttribute('src','https://www.romando.org/wp-content/uploads/2018/06/plaza-navona.jpeg');
    image3.setAttribute('src','https://www.romando.org/wp-content/uploads/2018/06/panteon_roma.jpeg');
  }
}

inputCheck.addEventListener('click',changeImages);




  

 
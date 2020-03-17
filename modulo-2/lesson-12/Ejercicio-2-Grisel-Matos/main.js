"use strict";

//Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
//Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
//Haz lo mismo para París y Nueva York

//ME FALTARÍA HACER UN REMOVE EN ALGÚN SITIO PARA QUE SOLO APAREZCAN EN EL DOM LAS IMAGENES SEGUN LA CIUDAD QUE SE SELECCIONE EN EL MOMENTO, QUE ELIMINE LAS QUE YA ESTÁN PARA INCORPORAR LAS NUEVAS
const selectCity = document.querySelector(".js-cities");


function paintImages(ev){
    removeCities();
    let chooseCity = ev.currentTarget.value;
    if (chooseCity === "Madrid") {
        getImagesCity1();   
    } else if (chooseCity === "Paris") {
        getImagesCity2();
    } else {
        getImagesCity3();
    }
}

selectCity.addEventListener("change", paintImages)

const getImagesCity1 = function ()  {
    //imagen 1
    let image1 = document.createElement('img');
    console.log(image1);
    image1.setAttribute("src", "https://images.pexels.com/photos/2440984/pexels-photo-2440984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    image1.setAttribute("width", "304");
    image1.setAttribute("height", "228");
    image1.style.marginTop = "20px";
    image1.style.borderRadius = "10px";
    //imagen 2
    let image2 = document.createElement('img');
    console.log(image2);
    image2.setAttribute("src", "https://images.pexels.com/photos/3763907/pexels-photo-3763907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    image2.setAttribute("width", "304");
    image2.setAttribute("height", "228");
    image2.style.marginTop = "20px";
    image2.style.marginLeft = "35px";
    image2.style.borderRadius = "10px";
    //imagen 3
    let image3 = document.createElement('img');
    console.log(image3);
    image3.setAttribute("src", "https://images.pexels.com/photos/1500598/pexels-photo-1500598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    image3.setAttribute("width", "304");
    image3.setAttribute("height", "228");
    image3.style.marginTop = "20px";
    image3.style.marginLeft = "35px";
    image3.style.borderRadius = "10px";
    
    const container = document.querySelector(".container");
    container.style.display = "inline-block";
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
}


const getImagesCity2 = function() {
    //imagen 1
    let image1 = document.createElement('img');
    console.log(image1);
    image1.setAttribute("src", "https://images.pexels.com/photos/149522/pexels-photo-149522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    image1.setAttribute("height", "228");
    image1.style.marginTop = "20px";
    image1.style.borderRadius = "10px";
    //imagen 2
    let image2 = document.createElement('img');
    console.log(image2);
    image2.setAttribute("src", "https://images.pexels.com/photos/2675266/pexels-photo-2675266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    image2.setAttribute("width", "304");
    image2.setAttribute("height", "228");
    image2.style.marginTop = "20px";
    image2.style.marginLeft = "35px";
    image2.style.borderRadius = "10px";
    //imagen 3
    let image3 = document.createElement('img');
    console.log(image3);
    image3.setAttribute("src", "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    image3.setAttribute("height", "228");
    image3.style.marginTop = "20px";
    image3.style.marginLeft = "35px";
    image3.style.borderRadius = "10px";
    
    const container = document.querySelector(".container");
    container.style.display = "inline-block";
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
}


const  getImagesCity3 = function() {
    //imagen 1
    let image1 = document.createElement('img');
    console.log(image1);
    image1.setAttribute("src", "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    image1.setAttribute("height", "228");
    image1.style.marginTop = "20px";
    image1.style.borderRadius = "10px";
    //imagen 2
    let image2 = document.createElement('img');
    console.log(image2);
    image2.setAttribute("src", "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    image2.setAttribute("width", "304");
    image2.setAttribute("height", "228");
    image2.style.marginTop = "20px";
    image2.style.marginLeft = "35px";
    image2.style.borderRadius = "10px";
    //imagen 3
    let image3 = document.createElement('img');
    console.log(image3);
    image3.setAttribute("src", "https://images.pexels.com/photos/2370724/pexels-photo-2370724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    image3.setAttribute("height", "228");
    image3.style.marginTop = "20px";
    image3.style.marginLeft = "35px";
    image3.style.borderRadius = "10px";
    
    const container = document.querySelector(".container");
    container.style.display = "inline-block";
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
}

function removeCities(){
    const container = document.querySelector(".container");
    console.log(container.children);
for (let i = container.children.length-1; i >= 0; i--) {
        console.log(container.children[i]);
        container.removeChild(container.children[i]);
    }
}
'use strict';

const buttons = document.querySelectorAll('button');
// console.log(buttons)

const changeColor= document.querySelector('.wrapper');

 function changeBgColor() {
    changeColor.classList.add('red');

 }

 for (let i=0; i<buttons.length; i++ ){

 buttons[i].addEventListener('click', changeBgColor);
 }
'use strict';

const lightOption = document.querySelector('#light');
const darkOption = document.querySelector('#dark');
const bodyElem = document.querySelector('.bodyContainer');
const formBtns = document.querySelector('.form');

function setTheme() {
  if (lightOption.checked) {
    bodyElem.classList.add('lightThemeBody');
    bodyElem.classList.remove('darkThemeBody');
    localStorage.setItem('theme', 'lightTheme');
  } else {
    bodyElem.classList.add('darkThemeBody');
    bodyElem.classList.remove('lightThemeBody');
    localStorage.setItem('theme', 'darkTheme');
  }
}

function getTheme() {
  let themeCookie = localStorage.getItem('theme');

  if (themeCookie === 'lightTheme') {
    lightOption.checked = 'checked';
  } else {
    darkOption.checked = 'checked';
  }

  setTheme();
}

formBtns.addEventListener('click', setTheme);
window.addEventListener('load', getTheme);

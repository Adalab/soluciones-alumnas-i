'use strict';
// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//comentar esta línea para elegir imagen de fill murray
userAvatar = '';
const img = document.querySelector('.user__avatar');

if (userAvatar === '') {
  img.src = DEFAULT_AVATAR;
} else {
  img.src = userAvatar;
}

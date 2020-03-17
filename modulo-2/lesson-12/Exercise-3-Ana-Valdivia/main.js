'use strict'

// Vamos a crear nuestro propio autocompletado de formularios.
// Para ello vamos a crear un formulario con tres campos: Nombre Apellidos
// Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos
// con esa estructura. Es decir, un listado 3 objetos, cada uno con
// nombre apellidos y teléfono. Pediremos a la usuaria que elija uno dee
// sos 3 con un select con el nombre. Al seleccionarlo se rellenará el
// formulario automáticamente.

let inputName = document.querySelector('#name_input');
let inputSurname = document.querySelector('#surname_input');
let inputPhone = document.querySelector('#phone_input');

const selectCheck = document.querySelector('#userSelect');
 
let array = [
  { name:'Patri',
  surname: 'Ramos',
  phone: '020302020',
  },
  { name:'Maria',
  surname: 'Blanco',
  phone: '5656565',
  },
  {name:'Ana',
  surname: 'Valdivia',
  phone: '5674049',
  }
];


function showUser(event){
  
  for(let i= 0; i<array.length; i++){
    if (event.currentTarget.value.toUpperCase() === array[i].name.toUpperCase()){
      inputName.value = array[i].name;
      inputSurname.value = array[i].surname;
      inputPhone.value = array[i].phone;
    }
  }
}

selectCheck.addEventListener('change', showUser);
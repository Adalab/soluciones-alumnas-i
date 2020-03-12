const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

  for (let i=0; i<items.length; i++){
      let type = typeof items[i]; 

      if (type !== 'object' || Array.isArray(items[i])){
      console.log(`El dato ${items[i]} está en la posición ${i} y es de tipo ${type}`)
      } else{
          let elementObject = Object.entries(items[i]);
        console.log(`El dato ${elementObject} está en la posición ${i} y es de tipo ${type}`)
      }

      // primer intento de devolver el objeto pintando todas sus propiedades

    //   if (type === 'object' && !Array.isArray(items[i])){
    //     console.log(Object.entries(items[i]));
    //   }


  }


  

//   const arr = ['Informática', 'Matemática', 'Escritora']
//   console.log(Array.isArray(arr))
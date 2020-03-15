## Cazando errores 1

Partiendo del ejercicio 1 vamos a modificarlo para en lugar de parsear la respuesta a JSON (response.json()) lo hagamos a html (response.html()). Ahora si abrimos la consola del navegador nos encontraremos un mensaje de error, léelo para familiarizarte con él.
Este error nos indica que ha sucedido un error en una de las promesas y que no lo hemos cazado, también nos da algo de información sobre el error. En este caso hemos intentado parsear a html la respuesta de la api de rand.fun que solo es parseable a JSON.
Vamos a ponerle un catch a nuestra promesa y a loguear el error.
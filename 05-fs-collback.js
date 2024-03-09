const fs = require('node:fs');

console.log('Leyendo el primer archivo');
fs.readFile('./fs.txt', 'utf-8', (err, data) => {
    console.log(data);
})

console.log('--> Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo ...');
fs.readFile('./fs2.txt', 'utf-8', (err, data) => {
    console.log(data);
})

// Los collback son tareas cuando se ejecuta una funcion asincrona
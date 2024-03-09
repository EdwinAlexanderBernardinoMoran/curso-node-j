
const fs = require('node:fs')

// FORMA SINCRONA
// console.log('Leyendo el primer archivo ...');
// const text = fs.readFileSync('./fs.txt', 'utf-8')

// console.log(text);

// console.log('Haciendo cosas mientras lee el archivo...');


// console.log('Leyendo el segundo archivo ...');
// const secondText = fs.readFileSync('./fs2.txt', 'utf-8')

// FORMA ASINCRONA

// Al ser Asincrono necesitamos un mecanismo para saber en que momento a terminado y ese mecanismo se le llama collback

console.log('Leyendo el primer archivo ...');
fs.readFile('./fs.txt', 'utf-8', (err, data) => { // <-- cuando termines de leer el archivo ejecuta este collback -->
    console.log('primer textp', data);
})

console.log('--> Haciendo cosas mientras lee el archivo...');


console.log('Leyendo el segundo archivo ...');
fs.readFile('./fs2.txt', 'utf-8', (err, data) => {
    console.log('segundo texto', data);
})
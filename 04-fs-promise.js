
const fs = require('node:fs/promises')

// Si por dado caso el modulo no tiene la version de promesa puedes utilizarlo de la siguiente manera.

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo ...');
fs.readFilePromise('./fs.txt', 'utf-8').then(data => console.log(data))

console.log('--> Haciendo cosas mientras lee el archivo...');


console.log('Leyendo el segundo archivo ...');
fs.readFilePromise('./fs2.txt', 'utf-8').then(data => console.log(data))

console.log('Promesas');

// Cuando es collback no se necesita guardar en una variable.
// De forma historica node siemre a utilizado collbacks
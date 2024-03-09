

// Esto asi nomas no funciona una opcion seria pasarlo a mjs
/*
const fs = require('node:fs/promises')
console.log('Leyendo el primer archivo ...');
const text = await fs.readFile('./fs.txt', 'utf-8')
console.log(text);

console.log('--> Haciendo cosas mientras lee el archivo...');


console.log('Leyendo el segundo archivo ...');
const secondText = await fs.readFile('./fs2.txt', 'utf-8')
console.log(secondText);

console.log('Promesas');

*/

// Los ECMASCRIPTMODULES tiene el soporte de utilizar await en el cuerpo del archivo, esto se llama top level await

const { readFile } = require('node:fs/promises');

// Funcion Autoinvocada
// IIFE - Inmediatly Invoked Function Expression
(
    async () => {
    console.log('Leyendo el primer archivo ...');
    const text = await readFile('./fs.txt', 'utf-8')
    console.log(text);
    
    console.log('--> Haciendo cosas mientras lee el archivo...');
    
    
    console.log('Leyendo el segundo archivo ...');
    const secondText = await readFile('./fs2.txt', 'utf-8')
    console.log(secondText);
    
    // console.log('Promesas');
})()

// El sistema de modulos clasicos no funciona el asinc await de manera normal mas conocida.
// * Una opcion es pasarla a extencion a mjs, porque ahi si tiene el soporte para utilizar await en el cuerpo del archivo.
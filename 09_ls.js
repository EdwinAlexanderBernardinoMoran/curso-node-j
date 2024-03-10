const fs = require('node:fs')

fs.readdir('.', (error, files) => {
    if (error) {
        console.error('Error al leer el directorio: ', error);
        return
    }

    files.forEach(file => {
        console.log(file);
    })
})

// Promessa

const fsPromisse = require('node:fs/promises');

fsPromisse.readdir('.').then(
    files => {
        files.forEach( element => {
            console.log(element);
        })
    }
)
.catch(
    error => {
        console.log(error);
    }
)
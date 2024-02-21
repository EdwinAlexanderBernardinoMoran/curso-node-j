// Sistema clasico de modulos de nodejs 

function suma(a, b) {
    return a + b;
}

// Nos devuelve un objeto con la llave sum y nos obliga a utilizarlo de esa manera

// CommonJs module export
module.exports = {
    suma
}
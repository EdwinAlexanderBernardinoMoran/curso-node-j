const path = require('node:path')

// Unir rutas con paht Join.
console.log(path.sep);

// Une rutas
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base);

// quita la extencion del fichero
const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(fileName);

// Nos da la extencion del fichero
const extencion = path.extname('my.super.image.png')
console.log(extencion);
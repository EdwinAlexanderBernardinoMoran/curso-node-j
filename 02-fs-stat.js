const fs = require('node:fs')

// Ejemplo Sincrono
const stats = fs.statSync('./fs.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
); 
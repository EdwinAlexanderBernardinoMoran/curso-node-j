// Modulos nativos de NodeJS

// primer sistema

const os = require("node:os")
console.log('Informacion del sistema operativo')
console.log('---------------------------------');

console.log('Nombre del sistema operativo', os.platform());
console.log('Arquitectura del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs', os.cpus()); // <-- Vamos a poder escalar procesos en Node
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria total', os.totalmem() / 1024 / 1024 );
console.log('uptime', os.uptime() / 60 / 60);
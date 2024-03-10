// Process 

// Argumentos de entrada.
console.log(process.argv);

// Controlar el proceso y su salida

// Todo a salido bien y todo tiene que terminar.
// process.exit(0) 

// Todo a habido un error y queremos que termine.
// process.exit(1) 

// Podemos controlar eventos del proceso, despues de terminar pordemos hacer lo siguiente
process.on('exit', () => {
     // cosas hacer...
     console.log('Termino Proceso');
})

// current working directory, es importante para saber de donde se ejcuta el fichero
console.log(process.cwd());

// platform
console.log(process.platform);

// Envairoments
console.log(process.env.EDWIN);
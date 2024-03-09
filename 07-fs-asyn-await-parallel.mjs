import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./fs.txt', 'utf-8'),
    readFile('./fs2.txt', 'utf-8'),
]).then(([text, secondText]) => {
    console.log('Primer texto: ', text);
    console.log('Segundo texto: ', secondText);
})


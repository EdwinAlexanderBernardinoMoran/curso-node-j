const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.';

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(picocolors.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1)
    }

    const filePromises = files.map( async file => {
        const filePath = path.join(folder, file)
        let stats
        
        console.log('===');
        try {
            stats = await fs.stat(filePath)
            console.log('stats');
        } catch{
            console.error(picocolors.red(`No se pudo leer el directorio ${filePath}`));
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${picocolors.blue(file.padEnd(30))} ${picocolors.green(fileSize.toString().padStart(10))} ${picocolors.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filePromises)

    filesInfo.forEach( fileInfo  => console.log(fileInfo))
}

ls(folder)
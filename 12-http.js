
const http = require('node:http')
const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo')
})

// server.listen(0, () => {
//     console.log(`server listening on port http://localhost:${server.address().port}`);
// })

const {findAvailablePort} = require('./13-free-port')

findAvailablePort(8000).then( port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`);
    })
})
// .catch(err => console.log(err))
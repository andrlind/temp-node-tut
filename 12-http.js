const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage!')
    } else if (req.url === '/about') {
        res.end('Here is some short history about us')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        `)
    }
})

server.listen(8090)
const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    return res.end();
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
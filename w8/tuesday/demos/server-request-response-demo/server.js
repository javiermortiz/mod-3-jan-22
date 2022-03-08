const http = require('http');
const fs = require("fs");
const { runInNewContext } = require('vm');

let dailyMessage = "hello";
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        res.write(`${dailyMessage}`);
        res.write(`<form action="/messages" method="post"><input name="dailyMessage"></form>`)
        return res.end();
    }

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        // Parsing the body of the request
        if (reqBody) {
            req.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            console.log(req.body);
        }

        if (req.method === 'POST' && req.url === '/messages') {
            dailyMessage = req.body.dailyMessage;
            res.statusCode = 302;
            res.setHeader('location', '/');
            res.end();
            return;
        }
    });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
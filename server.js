const http = require('http');

<<<<<<< HEAD
const hostname = '127.0.0.1';
const port = 1337;
=======
const hostname = 'http://localhost';
const port = 80;
>>>>>>> 8c64d36c7b85dba2f59cb431d1250d4248aa7c50

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');

const hostname = 'ec2-13-124-189-126.ap-northeast-2.compute.amazonaws.com';
const port = 80;


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer(requestListener);
console.log("Server is listening on", port);

function requestListener(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Request recieved, responding now ...");
    response.end("Hello");
}

server.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname +':'+ port +'/');
});

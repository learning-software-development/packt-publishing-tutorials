var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('Hello World!');
    response.end();
});

var port = 8080;
server.listen(port);
server.once('listening', function() {
    console.log('Hello World server listening on port %d', port);
});
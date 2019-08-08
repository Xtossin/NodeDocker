// load the http module
var http = require('http');

// configure the http server
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, This Application Works\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("The Server is listening at http://127.0.0.1:8000/");
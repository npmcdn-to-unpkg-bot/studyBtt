/**
 * Created by Truong on 02-Mar-16.
 */
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200,{'Content-TYpe': 'text/html'});
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
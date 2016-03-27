/**
 * Created by Truong on 03-Mar-16.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/07.006.htm').pipe(res);
    }

    if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        var json = JSON.stringify(obj);
        res.end(json);
    }

    res.writeHead(404);
    res.end();
}).listen(1337, '127.0.0.1');
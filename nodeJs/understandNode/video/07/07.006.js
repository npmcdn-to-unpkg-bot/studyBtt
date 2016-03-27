/**
 * Created by Truong on 03-Mar-16.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var html = fs.readFileSync(__dirname + '/07.006.htm');

    /** print plain text **/
    //res.writeHead(200,{'Content-TYpe': 'text/plain'});

    /** show content html **/
    res.writeHead(200,{'Content-Type': 'text/html'});
    //res.end(html);

    /** return JSON **/
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    var json = JSON.stringify(obj);
    res.end(json);

    /** use readStream **/
    //fs.createReadStream(__dirname + '/07.006.htm').pipe(res);
}).listen(1337, '127.0.0.1');
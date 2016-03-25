/**
 * Created by Truong on 01-Mar-16.
 */
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/06.010.txt');
var writable = fs.createWriteStream(__dirname + '/06.010.write.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.rar');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
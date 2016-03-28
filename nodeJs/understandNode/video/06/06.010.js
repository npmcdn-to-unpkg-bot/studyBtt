/**
 * Created by Truong on 01-Mar-16.
 */
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/06.010.txt',
    {encoding: 'utf8', highWaterMark : 2*1024}
);
var writable = fs.createWriteStream(__dirname + '/06.010.write.txt');

readable.on('data', function (chunk) {
    console.log(chunk);
    var date = new Date();
    //console.log(chunk.length);
    writable.write(chunk + date);
});
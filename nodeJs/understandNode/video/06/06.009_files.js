/**
 * Created by Truong on 22-Feb-16.
 */
var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/06.009.files.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/06.009.files.txt', 'utf8', function(err, data) {
    console.log(data);
});
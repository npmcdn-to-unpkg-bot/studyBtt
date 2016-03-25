/**
 * Created by MSI on 16-Mar-16.
 */
//var argv = require('yargs').argv;
var argv = require('yargs').command('hello', 'Greets the user', function (yargs) {
    yargs.options({
        name: {
            demand: true
        }
    });
}).argv;
console.log(argv); return;
var command = argv._[0];

if (command === 'truongbt' && typeof argv.name !== 'undefined') {
    console.log('hello world ' + argv.name);
} else if (command === 'truongbt') {
    console.log('hello');
} else {
    console.log('nothing');
}
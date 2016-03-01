/**
 * Created by MSI on 19-Feb-16.
 */
var Emitter = require('events');
var eventConfig = require('./05.004.config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.')
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred!')
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);
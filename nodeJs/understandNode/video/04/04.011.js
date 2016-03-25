/**
 * Created by Truong on 11-Feb-16.
 */
var greet = require('./04.011_function');
greet.greet();
greet.greeting = 'Change the world';

//Cache Module - when return an object
var greetb = require('./04.011_function');
greetb.greet();


var greet1 = require('./04.011_function1');
var grgr = new greet1();
grgr.greet();
grgr.greeting = 'hehe';

//No Cache Module
var greet1b = require('./04.011_function1');
var grgr1 = new greet1b();
grgr1.greet();
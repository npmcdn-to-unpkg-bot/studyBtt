var greeting = require('./greet.json');

var greet = function () {
    console.log(greeting.spa);
};

module.exports = greet;
var greeting = require('./greet.json');

var greet = function () {
    console.log(greeting.en);
};

module.exports = greet;
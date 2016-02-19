// function statement
function greet() {
    console.log('Hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expresstion
var greetMe = function () {
    console.log('Hi Btt');
}

greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expresstion on the fly
logGreeting(function () {
    console.log('Hello Truongbt');
});
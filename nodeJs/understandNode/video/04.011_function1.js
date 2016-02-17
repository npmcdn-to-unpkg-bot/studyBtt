/**
 * Created by Truong on 11-Feb-16.
 */
function Greetr() {
    this.greeting = 'Hello World';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;
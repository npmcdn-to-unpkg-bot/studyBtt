/**
 * Created by Truong on 21-Feb-16.
 */
var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

function Policeman() {
    Person.call(this);
    this.badgeNum = 1234;

}

util.inherits(Policeman, Person);

var poli = new Policeman();
poli.greet();
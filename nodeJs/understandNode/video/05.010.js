/**
 * Created by Truong on 21-Feb-16.
 */
'use strict';

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var jan = new Person('Jahn', 'Doe');
jan.greet();

console.log(john.__proto__);


function Person(firstname, lastname) {
    this.name1 = firstname;
    this.name2 = lastname;
}

Person.prototype.name3 = 'hehe';

Person.prototype.showName = function () {
    console.log('Hello, ' + this.name1 + ' ' + this.name2);
};

var person = new Person('truong', 'bui');
person.showName();

console.log(person.__proto__);
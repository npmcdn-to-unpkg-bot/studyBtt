/**
 * Created by Truong on 13-Feb-16.
 */
//object properties and metod
var obj = {
    greet: 'hello'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

var ar = [2,4,5];

ar.forEach(function(item, index, array) {
    console.log(index + ' : ' + item + ' - ' + array);
});
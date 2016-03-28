// pass by value
function changeValue(b) {
    b = 2;
}

var a = 1;
changeValue(a);
console.log(a); //result is 1

// pass by reference
function changeObject(obj) {
    obj.pro1 = function () {
    };
    obj.pro2 = {};
}

var a = {};
changeObject(a);
console.log(a);
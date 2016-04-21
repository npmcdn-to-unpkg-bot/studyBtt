/**
 * Created by Truong on 06-Apr-16.
 */
var _ = require('underscore');

var test = {};
test['number1'] = {
    name: 'truongbt',
    age: 18
};
test['number2'] = {
    name: 'dung',
    age: 19
};
test['number3'] = {
    name: 'ly',
    age: 7
};

_.each(test, function (value, key, list) {
    console.log(value.name);
});
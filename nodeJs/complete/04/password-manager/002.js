console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'truongbt');
//storage.setItemSync('accounts', [{
//    username: 'truongbui',
//    balance: 100
//}]);

//console.log(storage.getItemSync('name'));
var accounts = storage.getItemSync('accounts');

//push on a new account
accounts.push({
    username: 'Dung',
    balance: 92
});
//save using setItemSync
storage.setItemSync('accounts', accounts);
console.log(accounts);
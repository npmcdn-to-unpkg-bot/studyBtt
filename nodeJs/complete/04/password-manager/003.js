/**
 * Created by MSI on 15-Mar-16.
 */
console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

//account.name Facebook
//account.username User123
//account.password 1234567a

function createAccount (account) {
    var accounts = storage.getItemSync('accounts')

    if (typeof accounts === 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
}

function getAccount (accountName) {
    //loop over array, return matching account, else undefined
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

//createAccount({
//    name: 'Facebook',
//    username: 'User123',
//    password: '1234567a'
//});


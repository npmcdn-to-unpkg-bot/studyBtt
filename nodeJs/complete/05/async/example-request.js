/**
 * Created by MSI on 17-Mar-16.
 */
var weather = require('./weather');

weather(function (textMessage) {
    console.log(textMessage);
});
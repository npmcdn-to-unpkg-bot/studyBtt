/**
 * Created by MSI on 17-Mar-16.
 */
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a';

module.exports = function (callback) {
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(JSON.stringify(body, null, 4));
            callback("It's " + body.main.temp + ' in ' + body.name);
        }
    });
};
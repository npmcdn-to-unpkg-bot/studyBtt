/**
 * Created by MSI on 17-Mar-16.
 */
var express = require('express');
var app = express();
var PORT = 3000;

//app.get('/', function (req, res) {
//    res.send('Hello Express!')
//});

app.get('/about', function (req, res) {
    res.send('Hello About!')
});

app.use(express.static(__dirname + '/public'))
app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT + '!');
});
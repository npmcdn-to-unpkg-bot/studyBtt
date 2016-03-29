/**
 * Created by MSI on 21-Mar-16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Todo API Root 123xxx!');
});

app.listen(PORT, function () {
    console.log('Server started in port ' + PORT);
});
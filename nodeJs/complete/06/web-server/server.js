/**
 * Created by MSI on 17-Mar-16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware');


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('Hello About!')
});

app.use(express.static(__dirname + '/public'))
app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT + '!');
});
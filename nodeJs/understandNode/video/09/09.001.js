/**
 * Created by Truong on 10-Mar-16.
 */
var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;


//static files
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url : ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');
});

apiController(app);
app.listen(port);hhhhhhhhhh
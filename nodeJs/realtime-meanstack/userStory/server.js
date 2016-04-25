/**
 * Created by MSI on 21-Apr-16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.database, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
});

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/angular', express.static(__dirname + "/node_modules/angular"));
app.use('/angular-route', express.static(__dirname + "/node_modules/angular-route"));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/app/views/index.html")
});

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server running with port " + config.port);
    }
});
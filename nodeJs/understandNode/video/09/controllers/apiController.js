/**
 * Created by Truong on 22-Mar-16.
 */
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodeParser = bodyParser.urlencoded({extended : false});
module.exports = function(app) {
    app.get('/person/:id', function(req, res) {
        res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
    });

    app.post('/person', urlencodeParser, function(req, res) {
        res.send('Thank you!');
        console.log(req.body);
    });

    app.post('/personjson', jsonParser, function(req, res) {
        res.send('thanks you for the JSON data!');
        console.log(req.body);
    });

    app.get('/api', function(req, res) {
        res.json({firstname: 'btt', lastname: 'school'});;
    });
}
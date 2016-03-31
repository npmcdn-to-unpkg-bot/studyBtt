/**
 * Created by MSI on 21-Mar-16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos =[{
    "description": "number One",
    "id": 1,
    "completed": true
}, {
    "description": "number Two",
    "id": 1,
    "completed": false
}];
var todoNextId = todos.length;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Todo API Root !');
});

//GET /todo
app.get('/todos', function (req, res) {
    res.json(todos);
});

//GET /todo/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var result = _.findWhere(todos, {id: todoId});

    if (result) {
        res.send(result);
    } else {
        res.status(404).send();
    }
});

//POST /todo
app.post('/todos', function (req, res) {
    var body = _.pick(req.body, 'description', 'completed');
    //validate
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
        return res.status(400).send();
    }
    body.description = body.description.trim();
    //add id field
    body.id = todoNextId++;
    //push body into array
    todos.push(body);
    res.json(body);
});

//DELETE /todo/:id
app.delete('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchObject = _.findWhere(todos, {id: todoId});

    if (!matchObject) {
        res.status(404).json({"error": "Id not found"});
    } else {
        todos = _.without(todos, matchObject);
        res.json(matchObject);
    }
});

app.listen(PORT, function () {
    console.log('Server started in port ' + PORT);
});
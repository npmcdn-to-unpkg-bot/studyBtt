/**
 * Created by MSI on 21-Mar-16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos =[];
var todoNextId = 0;

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
    var result;

    todos.forEach(function (todo) {
        if (todo.id == todoId) {
            result = todo;
        }
    });

    if (result) {
        res.send(result);
    } else {
        res.status(404).send();
    }
});

//POST /todo
app.post('/todos', function (req, res) {
    var body = req.body;
    //add id field
    body.id = todoNextId++;
    //push body into array
    todos.push(body);
    res.json(body);
});
app.listen(PORT, function () {
    console.log('Server started in port ' + PORT);
});
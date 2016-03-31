/**
 * Created by MSI on 21-Mar-16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos =[{
    id: 1,
    description: 'Have lunch',
    completed: false
}, {
    id: 2,
    description: 'Swimming',
    completed: true
}];

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
app.listen(PORT, function () {
    console.log('Server started in port ' + PORT);
});
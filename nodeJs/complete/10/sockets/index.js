/**
 * Created by MSI on 01-Apr-16.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));

io.on('connection', function(socket) {
    console.log('User connected via socket.iso');

    socket.on('messageReceive', function (message) {
        console.log('Message received: ' + message.contentMessage);

        socket.broadcast.emit('messageSend', message);
    });

    socket.emit('messageSend', {
        contentMessage: "welcome to chat application"
    });
});

http.listen(PORT, function () {
    console.log("Server started in port " + PORT)
});
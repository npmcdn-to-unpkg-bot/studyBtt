/**
 * Created by MSI on 01-Apr-16.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/moment', express.static(__dirname + "/node_modules/moment"));

io.on('connection', function(socket) {
    console.log('User connected via socket.iso');

    socket.on('messageReceive', function (message) {
        console.log('Message received: ' + message.contentMessage);

        //socket.broadcast.emit('messageSend', message);
        message.timestamp = moment().valueOf();
        io.emit('messageSend', message);
    });

    socket.emit('messageSend', {
        contentMessage: "welcome to chat application",
        timestamp: moment().valueOf(),
        name: "System"
    });
});

http.listen(PORT, function () {
    console.log("Server started in port " + PORT)
});
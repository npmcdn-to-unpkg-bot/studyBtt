/**
 * Created by MSI on 01-Apr-16.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var _ = require('underscore');

app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/moment', express.static(__dirname + "/node_modules/moment"));

var clientInfo = {};

//send current users to provided socket
//improve : @private
function sendCurrentUsers (socket) {
    var info = clientInfo[socket.id];
    var returnUser = [];

    if (typeof info === 'undefined') {
        return;
    } else {
        _.each(clientInfo, function (value, key) {
            if (value.room === info.room) {
                returnUser.push(value.name);
            }
        });
        socket.emit('messageSend', {
            contentMessage: "Current user : " + returnUser.join(', '),
            timestamp: moment().valueOf(),
            name: "System"
        })
    }
}

io.on('connection', function (socket) {
    console.log('User connected via socket.iso');

    socket.on('messageReceive', function (message) {
        console.log('Message received: ' + message.contentMessage);

        if (message.contentMessage === '@currentUsers') {
            sendCurrentUsers(socket);
        } else {
            message.timestamp = moment().valueOf();
            //socket.broadcast.emit('messageSend', message); // send other user
            //io.emit('messageSend', message); // send all user
            io.to(clientInfo[socket.id].room).emit('messageSend', message); // send all user in room
            //socket.emit('messageSend', message); // only send current user
        }
    });

    socket.on('joinRoom', function (req) {
        clientInfo[socket.id] = req;
        socket.join(req.room);
        socket.broadcast.to(req.room).emit('messageSend', {
            timestamp: moment().valueOf(),
            name: 'System',
            contentMessage: req.name + ' has joined!'
        });
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
        var userData = clientInfo[socket.id];
        if (typeof userData !== 'undefined') {
            socket.leave(userData.room);
            io.to(userData.room).emit('messageSend', {
                name: 'System',
                contentMessage: userData.name + ' has left!',
                timestamp: moment().valueOf()
            });
            delete clientInfo[socket.id];
        }
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
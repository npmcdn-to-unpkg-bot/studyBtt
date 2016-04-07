/**
 * Created by MSI on 01-Apr-16.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var custom = require('./public/custom.js');
var _ = require('underscore');

app.use(express.static(__dirname + "/public"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/moment', express.static(__dirname + "/node_modules/moment"));

var clientInfo = {};

io.on('connection', function (socket) {
    console.log('User connected via socket.iso');

    socket.emit('messageSend', {
        contentMessage: "welcome to chat application",
        timestamp: moment().valueOf(),
        name: "System"
    });

    socket.on('messageReceive', function (message) {
        if (message.contentMessage === '@currentUsers') {
            var listCurrentUser = custom.listCurrentUser(socket, clientInfo);
            socket.emit('messageSend', {
                contentMessage: "Current user : " + listCurrentUser.join(', '),
                timestamp: moment().valueOf(),
                name: "System"
            });
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
        io.to(req.room).emit('userOnline', {
            listUser: clientInfo,
            total: _.size(clientInfo)
        });
    });

    socket.on('disconnect', function() {
        console.log('disconnect');
        var userData = clientInfo[socket.id];
        if (typeof userData !== 'undefined') {
            socket.leave(userData.room);
            delete clientInfo[socket.id];
            io.to(userData.room).emit('userOnline', {
                listUser: clientInfo,
                total: _.size(clientInfo)
            });
        }
    });
});

http.listen(PORT, function () {
    console.log("Server started in port " + PORT)
});
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
    socket.emit('messageSend', {
        contentMessage: "welcome to chat application",
        timestamp: moment().valueOf(),
        name: "System"
    });

    socket.on('messageReceive', function (message) {
        if (message.contentMessage === '@currentUsers') {
            var listCurrentUser = custom.listUserRoomates(socket, clientInfo);
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
        var listUserRoomates = custom.findAllUserRoomates(req.room, clientInfo);
        io.to(req.room).emit('userOnline', {
            listUser: listUserRoomates,
            total: _.size(listUserRoomates)
        });
    });

    socket.on('disconnect', function () {
        var userData = clientInfo[socket.id];
        if (typeof userData !== 'undefined') {
            socket.leave(userData.room);
            delete clientInfo[socket.id];
            var listUserRoomates = custom.findAllUserRoomates(userData.room, clientInfo);
            io.to(userData.room).emit('userOnline', {
                listUser: listUserRoomates,
                total: _.size(listUserRoomates)
            });
        }
    });
});

http.listen(PORT, function () {
    console.log("Server started in port " + PORT)
});
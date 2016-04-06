/**
 * Created by Truong on 02-Apr-16.
 */
var socket = io();
var name = getQueryVariable('name') || 'Annoymous';
var room = getQueryVariable('room');

console.log(name + " wants to join " + room);

socket.on('connect', function () {
    console.log('User connected via socket.iso Client');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('messageSend', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    $("#chat").append(
        "<div class='message'>" +
        "<img src='http://api.randomuser.me/portraits/med/men/66.jpg'>" +
        //"<b>" + momentTimestamp.local().format('hh:mm a') + "</b> - " +
        //"<i>" + message.name + "</i> : " +
        "<div class='wrap-content'>" +
            "<p class='username'>" + message.name + "</p>" +
            "<div class='wrap-message'><p>" + message.contentMessage + "</p></div>" +
        "</div></div>"
    );
});

$(document).ready(function () {
    $("h1.room-name").text(room);
    $("#formChat").submit(function (event) {
        event.preventDefault();
        socket.emit('messageReceive', {
            contentMessage: $(this).find('input[name=message]').val(),
            name: name
        });
        $(this).find('input[name=message]').val('');
    });

    var test = {};
    test['number1'] = {
        name: 'truongbt',
        age: 18
    };
    test['number2'] = {
        name: 'dung',
        age: 19
    };
    test['number3'] = {
        name: 'ly',
        age: 7
    };
    $.each(test, function (key, value) {
        console.log(key + " : " + value);
    });
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]).replace(/\+/g, ' ');
        }
    }

    return undefined;
}
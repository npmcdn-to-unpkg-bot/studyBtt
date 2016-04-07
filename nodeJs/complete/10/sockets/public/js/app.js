/**
 * Created by Truong on 02-Apr-16.
 */
var socket = io();
var name = getQueryVariable('name') || 'Annoymous';
var room = getQueryVariable('room');

socket.on('connect', function () {
    console.log('User connected via socket.iso Client');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('userOnline', function (message) {
    var listUser = message.listUser;
    var text = '<a href="#" class="list-group-item active">List user Online <span class="badge">' + message.total + '</span></a>';
    $.each(listUser, function (key, value) {
        text+= '<a href="#" class="list-group-item">' + value.name + '</a>';
    });
    $(".user-online .list-group").html(text);
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
    $("h1.room-name").text("Group :" + room);
    $("#formChat").submit(function (event) {
        event.preventDefault();
        socket.emit('messageReceive', {
            contentMessage: $(this).find('input[name=message]').val(),
            name: name
        });
        $(this).find('input[name=message]').val('');
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
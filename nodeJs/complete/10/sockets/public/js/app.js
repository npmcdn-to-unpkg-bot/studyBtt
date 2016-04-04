/**
 * Created by Truong on 02-Apr-16.
 */
var socket = io();
var name = getQueryVariable('name') || 'Annoymous';
var room = getQueryVariable('room');

console.log(name + " wants to join " + room);

socket.on('connect', function() {
    console.log('User connected via socket.iso Client');
});

socket.on('messageSend', function(message) {
    var momentTimestamp = moment.utc(message.timestamp);
    $("#chat").append(
        "<p class='well'>"+
        "<b>"+momentTimestamp.local().format('hh:mm a')+"</b> - "+
        "<i>"+message.name+"</i> : "+
        message.contentMessage+
        "</p>"
    );
});

$(document).ready(function() {
    $("h1.room-name").text(room);
    $("#formChat").submit(function(event) {
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
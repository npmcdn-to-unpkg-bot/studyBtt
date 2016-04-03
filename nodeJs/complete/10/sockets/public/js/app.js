/**
 * Created by Truong on 02-Apr-16.
 */
var socket = io();

socket.on('connect', function() {
    console.log('User connected via socket.iso Client');
});

socket.on('messageSend', function(message) {
    console.log(message.contentMessage);
});

$(document).ready(function() {
    $("#formChat").submit(function(event) {
        event.preventDefault();
        socket.emit('messageReceive', {
            contentMessage: $(this).find('input[name=message]').val()
        });
        $(this).find('input[name=message]').val('');
    });


});
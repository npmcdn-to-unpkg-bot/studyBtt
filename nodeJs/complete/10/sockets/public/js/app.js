/**
 * Created by Truong on 02-Apr-16.
 */
var socket = io();
var name = getQueryVariable('name') || 'Annoymous';
var room = getQueryVariable('room');

socket.on('connect', function () {
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('userOnline', function (message) {
    var listUser = message.listUser;
    var text = '<a href="#" class="list-group-item active">List user Online <span class="badge">' + message.total + '</span></a>';
    text += "<a href='#' class='list-group-item' onclick='switchChat(this)' data-socket-name='chatRoom' data-socket-id='chatRoom'>All in Room</a>";
    $.each(listUser, function (key, value) {
        key = key.replace('/#', '');
        if (key == socket.id)
            text += '<a href="#" disable data-socket-name="' + value.name + '" data-socket-id="' + key + '" class="list-group-item disabled">' + value.name + '</a>';
        else {
            createScreenChat(key, value.name);
            text += '<a href="#" onclick="switchChat(this)" data-socket-name="' + value.name + '" data-socket-id="' + key + '" class="list-group-item">' + value.name + '</a>';
        }

    });
    $(".user-online .list-group").html(text);
});

socket.on('messageSend', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    $("#chatRoom").append(
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

socket.on('chatPrivateSend', function (message) {
    var screenChat = message.from.replace('/#', '');
    $("#" + screenChat).append(
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
        var chatting = $(".list-group a.chatting").attr('data-socket-id');
        if (typeof chatting === "undefined") {
            alert('please select group or person to chat');
            return;
        }

        // chat all group
        if (chatting == "chatRoom") {
            socket.emit('messageReceive', {
                contentMessage: $(this).find('input[name=message]').val(),
                name: name
            });
        } else {
            var contentMessage = $(this).find('input[name=message]').val();
            socket.emit('chatPrivateReceive', {
                contentMessage: contentMessage,
                from: "/#" + socket.id,
                to: "/#" + chatting
            });

            $("#" + chatting).append(
                "<div class='message me'>" +
                "<img src='http://api.randomuser.me/portraits/med/men/66.jpg'>" +
                    //"<b>" + momentTimestamp.local().format('hh:mm a') + "</b> - " +
                    //"<i>" + message.name + "</i> : " +
                "<div class='wrap-content'>" +
                "<p class='username'>" + name + "</p>" +
                "<div class='wrap-message'><p>" + contentMessage + "</p></div>" +
                "</div></div>"
            );
        }
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

function switchChat(_this) {
    var dataSocketId = $(_this).attr('data-socket-id');

    $("#chat").children().hide(300);
    $("#" + dataSocketId).show(300);
    $(".list-group a").removeClass("chatting");
    $(_this).addClass('chatting');
}

function createScreenChat (socketId, socketName) {
    if (!$("#" + socketId).length) {
        $("#chat").append('<div style="display: none" id="' + socketId + '">' +
            '<div class="message">'+
            '<img src="http://api.randomuser.me/portraits/med/men/66.jpg">'+
            '<div class="wrap-content">'+
            '<p class="username">System</p>'+
            '<div class="wrap-message"><p>Let\' chat with ' + socketName+ '</p>' +
            '</div>' +
            '</div></div></div>');
    }
}

function appendChat () {

}
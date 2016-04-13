/**
 * Created by MSI on 07-Apr-16.
 */
var _ = require('underscore');

//send current users to provided socket
//improve : @private
module.exports.listUserRoomates = function (socket, clientInfo) {
    var info = clientInfo[socket.id];
    var returnUser = [];

    if (typeof info === 'undefined') {
        return;
    } else {
        _.each(clientInfo, function (value, key) {
            if (value.room === info.room) {
                returnUser.push(value);
            }
        });
        return returnUser;
    }
};

module.exports.findAllUserRoomates = function (roomName, clientInfo) {
    var returnUser = [];
    _.each(clientInfo, function (value, key) {
        if (value.room === roomName) {
            var json = {
                name: value.name,
                room: value.room
            };
            returnUser[key] = json;
        }
    });
    return returnUser;
};
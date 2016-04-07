/**
 * Created by MSI on 07-Apr-16.
 */
var _ = require('underscore');

//send current users to provided socket
//improve : @private
module.exports.listCurrentUser = function (socket, clientInfo) {
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
        return returnUser;
    }
};
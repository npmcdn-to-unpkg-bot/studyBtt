/**
 * Created by MSI on 21-Apr-16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var StorySchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {type: String, required: true},
    created: {type: Date, defauly: Date.now}
});

module.exports = mongoose.model('Story', StorySchema);
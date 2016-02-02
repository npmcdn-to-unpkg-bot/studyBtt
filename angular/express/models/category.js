/**
 * Created by Truong on 24-Jan-16.
 */
var mongoose = require('mongoose');

var cateSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var CateObject = module.exports = mongoose.model('category', cateSchema);

//get all categories
module.exports.getAllCategories = function(callback) {
    CateObject.find(callback);
};

//get category by id
module.exports.getCategoyById = function(id, callback) {
    CateObject.findById(id, callback);
};
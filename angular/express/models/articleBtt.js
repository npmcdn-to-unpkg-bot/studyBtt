/**
 * Created by Truong on 24-Jan-16.
 */
var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var ArticleObject = module.exports = mongoose.model('articleHiHi', articleSchema, 'article');

// Get All Articles
module.exports.getArticles = function(callback){
    ArticleObject.find(callback);
};

//Get Article By Id
module.exports.getArticleById = function(id, callback){
    ArticleObject.findById(id, callback);
};

//get Category Articles
module.exports.getArticleByCategory = function(category, callback){
    var query= {category: category};
    ArticleObject.find(query, callback);
};
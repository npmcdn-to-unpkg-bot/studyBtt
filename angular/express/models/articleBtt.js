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

var ArticleObject = module.exports = mongoose.model('articleHiHi', articleSchema, 'articles');

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

//add an article
module.exports.createArticle = function(newArticle, callback){
    newArticle.save(callback);
};

//update an article
module.exports.updateArticle = function(id, data, callback){
    var title = data.title;
    var body = data.body;
    var category = data.category;

    var query = {_id: id};

    ArticleObject.findById(id, function(err, article){
        if(!article){
            return next(new Error('Could not load Article'));
        } else {
            //update
            article.title = title;
            article.body = body;
            article.category = category;

            article.save(callback);
        }

    });
};

//remove article
module.exports.removeArticle = function(id, callback){
    ArticleObject.find({_id: id}).remove(callback);
};
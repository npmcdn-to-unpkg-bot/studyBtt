var express = require('express');
var router = express.Router();

var Article = require('../models/articleBtt');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles) {
    if(err){
      console.log(err);
    }
    res.json(articles);
  });
});

//get article specific
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article) {
    if(err){
      console.log(err);
    }
    res.json(article);
  });
});

//get article by category
router.get('/category/:name', function(req, res, next) {
  Article.getArticleByCategory(req.params.name, function(err, article) {
    if(err) {
      console.log(err);
    }
    res.json(article);
  })
});
module.exports = router;

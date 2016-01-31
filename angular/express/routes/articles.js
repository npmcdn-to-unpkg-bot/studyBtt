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

//create article
router.post('/', function(req, res, next){
  //article object
  var newArticle = new Article({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  });

  //save
  Article.createArticle(newArticle, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  })
});

//update article
router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  };

  //update
  Article.updateArticle(id, data, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});

//remove article
router.delete('/:id', function(req, res, next){
  var id = res.params.id;

  //remove
  Article.removeArticle(id, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});
module.exports = router;
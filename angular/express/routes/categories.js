/**
 * Created by Truong on 24-Jan-16.
 */
var express = require('express');
var router = express.Router();

var Category = require('../models/category.js');

/* GET categories listing. */
router.get('/', function(req, res, next) {
  Category.getAllCategories(function(err, categories){
    if(err) {
      console.log(err);
    }
    res.json(categories);
  });
});

/* GET category by id. */
router.get('/:id', function(req, res, next) {
  Category.getCategoyById(req.params.id, function(err, category){
    if(err) {
      console.log(err);
    }
    res.json(category);
  });
});



module.exports = router;

/**
 * Created by Truong on 1/30/2016.
 */
var app = angular.module('tE', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoryCtrl'
    }).
    when('/articles', {
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesCtrl'
    }).
    when('/articles/detail/:id', {
      templateUrl: 'views/article_detail.view.html',
      controller: 'ArticleDetailCtrl'
    }).
    when('/articles/category/:category', {
      templateUrl: 'views/article_cat.view.html',
      controller: 'ArticleCategoryCtrl'
    }).
    when('/articles/add', {
      templateUrl: 'views/article_add.view.html',
      controller: 'ArticleAddCtrl'
    }).
    when('/articles/edit/:id', {
      templateUrl: 'views/article_edit.view.html',
      controller: 'ArticleEditCtrl'
    }).
    otherwise({
      redirectTo : '/categories'
    });
}]);


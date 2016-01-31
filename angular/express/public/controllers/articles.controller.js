/**
 * Created by Truong on 1/30/2016.
 */
app.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('/articles').success(function(data){
    return $scope.articles = data;
  });
}]);

app.controller('ArticleDetailCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  //console.log(window.history.back());
  $http.get('/articles/'+$routeParams.id).success(function(data){
    return $scope.article = data;
  });

  $scope.removeArticle = function(){
    $http.delete('/articles/'+$routeParams.id).success(function(data){
      console.log(data);
    });
  //  $location.path('/#categories');
  };
}]);

app.controller('ArticleCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('/articles/category/'+$routeParams.category).success(function(data){
    $scope.cat_articles = data;
    $scope.category = $routeParams.category;
  });
}]);

app.controller('ArticleAddCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $http.get('/categories').success(function(data){
    return $scope.categories = data;
  });

  $scope.addArticle = function(){
    var data = {
      title: $scope.title,
      category: $scope.category,
      body: $scope.body
    };

    $http.post('/articles', data).success(function(data, status){
      console.log('status : '+status);
    });

    $location.path('/#categories');
  }
}]);

app.controller('ArticleEditCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  $http.get('/articles/'+$routeParams.id).success(function(data){
    return $scope.article = data;
  });

  $http.get('/categories').success(function(data){
    return $scope.categories = data;
  });

  $scope.editArticle = function(){
    var data = {
      id: $routeParams.id,
      title: $scope.article.title,
      category: $scope.article.category,
      body: $scope.article.body
    };

    $http.put('/articles', data).success(function(data, status){
      console.log('status : '+status);
    });
  };
}]);
/**
 * Created by Truong on 1/30/2016.
 */
app.controller('CategoryCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('/categories').success(function(data){
    return $scope.categories = data;
  });
}]);
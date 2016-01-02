/**
 * Created by Truong on 03-Jan-16.
 */
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);
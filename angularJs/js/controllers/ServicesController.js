/**
 * Created by Truong on 03-Jan-16.
 */
app.controller('ServicesController', ['$scope', 'forecast', function($scope, forecast) {
    $scope.fiveDay = forecast.success(function(data) {
        $scope.fiveDay = data;
    });

}]);
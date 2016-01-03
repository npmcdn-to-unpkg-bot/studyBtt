app.controller('04Controller', ['$scope', function ($scope) {
    $scope.sayHello = function() {
        $scope.greeting = "Hello " + $scope.username;
    };
}]);
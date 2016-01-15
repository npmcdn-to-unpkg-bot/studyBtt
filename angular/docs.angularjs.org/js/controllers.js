'use strict';

/* Controllers */
var phoneCatController = angular.module('phoneCatControllers', []);
phoneCatController.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('phones/phones.json').success (function (data){
        $scope.phones = data.splice(0, 6);
    });

    $scope.orderProp = 'age';
}]);

phoneCatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.idPhone + '.json').success (function (data) {
            $scope.phone = data;
        });
}]);
'use strict';

/* Controllers */
var phoneCatController = angular.module('phoneCatControllers', []);
phoneCatController.controller('PhoneListCtrl', ['$scope', 'Phone', function ($scope, Phone) {
    $scope.phones = Phone.query();
    //$http.get('phones/phones.json').success (function (data){
    //    $scope.phones = data.splice(0, 6);
    //});

    $scope.orderProp = 'age';
}]);

phoneCatController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
    //$http.get('phones/' + $routeParams.idPhone + '.json').success (function (data) {
    //    $scope.phone = data;
    //    $scope.mailImg = data.images[0];
    //});
    $scope.phone = Phone.get({idPhone: $routeParams.idPhone}, function(phone) {
        $scope.mailImg = phone.images[0];
    });

    $scope.changeImg = function (imgClick) {
        $scope.mailImg = imgClick;
    };

    $scope.hello = function(name) {
        alert('Hello ' + (name || 'world') + '!');
    };
}]);
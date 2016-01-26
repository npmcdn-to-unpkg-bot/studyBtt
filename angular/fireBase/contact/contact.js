/**
 * Created by Truong on 22-Jan-16.
 */
var contact = angular.module('fireBase.Contact', ['ngRoute', 'firebase']);
contact.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/fireBase', {
        templateUrl : 'contact/contactFireBase.html',
        controller : 'contactController'
    });
}]);
contact.controller('contactController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray, Entry) {
    var ref = new Firebase('https://contactfirebase.firebaseio.com/');
    $scope.messages = $firebaseArray(ref);
    $scope.addContact = function () {
        $scope.messages.$add({
            email: $scope.email,
            fullname: $scope.fullname,
            nickname: $scope.nickname
        }).then(function(ref) {
            console.log('Contact with ID : ' + ref.key());
            clearField();
        });
    };

    $scope.updateContract = function (msg) {
        var entry = Entry.get({ id: $scope.id }, function() {
            console.log(entry);
        }); // get() returns a single entry
    };

    $scope.showEditForm = function (msg) {
        $scope.showAddForm();
        $scope.formName = 'Update Contact';
        $scope.email = msg.email;
        $scope.fullname= msg.fullname;
        $scope.nickname = msg.nickname;
    };

    $scope.showContact = function (msg) {
        $scope.email = msg.email;
        $scope.fullname= msg.fullname;
        $scope.nickname = msg.nickname;
        $scope.contactShow = true;
        $scope.addFormShow = false;
    };

    $scope.showAddForm = function () {
        clearField();
        $scope.addFormShow = true;
        $scope.contactShow = false;
        $scope.formName = 'Add Contact';
    };
    $scope.hideAddForm = function () {
        clearField();
        $scope.contactShow = false;
        $scope.addFormShow = false;
    };

    function clearField () {
        $scope.email = '';
        $scope.fullname = '';
        $scope.nickname = '';
    };
}]);

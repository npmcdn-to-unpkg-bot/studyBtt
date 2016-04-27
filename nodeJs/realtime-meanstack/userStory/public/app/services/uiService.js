/**
 * Created by MSI on 27-Apr-16.
 */
angular.module('uiService', ['ngAnimate', 'ui.bootstrap'])
    .factory('Ui', function ($uibModal) {
        var ui = {};

        ui.showMessage = function (message) {
            var modalInstance = $uibModal.open({
                templateUrl: 'myModalContent.html',
                controller: 'handlUi',
                resolve: {
                    message: function () {
                        return message;
                    }
                }
            });
        };
        return ui;
    })
    .controller('handlUi', function ($scope, message) {
        $scope.message = message;
    });
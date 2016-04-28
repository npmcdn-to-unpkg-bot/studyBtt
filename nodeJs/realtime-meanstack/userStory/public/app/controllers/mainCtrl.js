/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('mainCtrl', [])
    .controller('MainController', function ($scope, $location, Auth, Ui, $rootScope, $window) {
        var vm = this;

        vm.loggedIn = Auth.isLoggedIn();
        $scope.$on('$routeChangeStart', function (e, current, pre) {
            console.log(current.$$route.originalPath);
            console.log("===================");
            vm.loggedIn = Auth.isLoggedIn();
            if (vm.loggedIn) {
                Auth.getUser().then(function (data) {
                    console.log(data.data);
                    vm.user = data.data;
                }, function (err) {
                    Ui.showMessage(err.data.message);
                    console.log('Error ChangeStart : ' + err.data.message);
                    vm.error = err.data.message;
                });
            }
        });

        vm.dump = function (param) {
            angular.forEach(param, function (value, key) {
                console.log("Key : " + key + " value : " + value);
            })
        };

        vm.doLogin = function () {
            vm.processing = true;
            vm.error = '';
            Auth.login(vm.loginData.username, vm.loginData.password)
                .success(function (dataLogin) {
                    vm.processing = false;

                    if (dataLogin.success) {
                        Auth.getUser().then(function (data) {
                            vm.user = data.data;
                        });
                        $location.path('/');
                    } else {
                        vm.error = dataLogin.message;
                        Ui.showMessage(dataLogin.message);
                    }
                });
        };

        vm.doLogout = function () {
            Auth.logout();
            $location.path('/deohieuvisao');
        };
    });
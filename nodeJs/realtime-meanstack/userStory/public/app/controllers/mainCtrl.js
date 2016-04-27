/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('mainCtrl', [])
    .controller('MainController', function ($scope, $location, Auth, Ui, $rootScope) {
        var vm = this;

        vm.loggedIn = Auth.isLoggedIn();
        $scope.$on('$routeChangeStart', function () {
            vm.loggedIn = Auth.isLoggedIn();
            Auth.getUser().then(function (data) {
                vm.user = data.data;
            }, function (err) {
                Ui.showMessage(err.data.message);
                console.log('Error ChangeStart : ' + err.data.message);
                vm.error = err.data.message;
            });
        });

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
                    }
                });
        };

        vm.doLogout = function () {
            Auth.logout();
            $location.path('/logout');
        };
    });
/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('mainCtrl', [])
    .controller('MainController', function ($scope, $location, Auth) {
        var vm = this;

        vm.loggedIn = Auth.isLoggedIn();
        //$scope.$on('$routeChangeStart', function () {
        //    vm.loggedIn = Auth.isLoggedIn();
        //    console.log('change start');
        //    Auth.getUser().then(function (data) {
        //        vm.user = data.data;
        //    }, function (err) {
        //        console.log('Error : ' + err);
        //    });
        //});

        vm.doLogin = function () {
            vm.processing = true;
            vm.error = '';
            Auth.login(vm.loginData.username, vm.loginData.password)
                .success(function (data) {
                    vm.processing = false;

                    Auth.getUser().then(function (data) {
                        vm.user = data.data;
                    });
                    if (data.success) {
                        $location.path('/');
                    } else {
                        vm.error = data.message;
                    }
                });
        };

        vm.doLogout = function () {
            Auth.logout();
            $location.path('/logout');
        };
    });
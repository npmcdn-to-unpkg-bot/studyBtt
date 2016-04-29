/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('userCtrl', [])
    .controller('UserController', function (User) {
        var vm = this;
        vm.processing = true;

        User.all()
            .success(function (data) {
                vm.users = data;
            });
    })
    .controller('UserCreateController', function (User, $location, $window) {
        var vm = this;
        vm.signupUser = function () {
            vm.message = '';
            User.create(vm.userData)
                .then(function (response) {
                    vm.userData = {};
                    vm.messae = response.data.message;

                    $window.localStorage.setItem('token', response.data.token);
                    $location.path('/');
                }, function (err) {
                    console.log('Error create user : ' + err);
                });
        }
    });
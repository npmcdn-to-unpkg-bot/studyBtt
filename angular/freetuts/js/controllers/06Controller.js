/**
 * Created by Truong on 03-Jan-16.
 */
app.controller('06Controller', ['$scope', function ($scope){
    $scope.message = {
        title : "Caculator",
        num1 : "so thu nhat",
        num2 : "so thu hai",
        phep_cong : "phep cong",
        phep_tru : "phep tru",
        phep_nhan : "phep nhan",
        phep_chia : "phep chia",
    };

    $scope.showResult = function () {
        if ($scope.testForm.$valid) {
            $scope.result = {
                phep_cong: parseInt($scope.num1) + parseInt($scope.num2),
                phep_tru: parseInt($scope.num1) - parseInt($scope.num2),
                phep_nhan: parseInt($scope.num1) * parseInt($scope.num2),
                phep_chia: parseInt($scope.num1) / parseInt($scope.num2),
            }
        }
    }
}]);
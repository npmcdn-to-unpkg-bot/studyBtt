/**
 * Created by Truong on 04-Jan-16.
 */
app.controller('10Controller', ['$scope', function ($scope) {
    $scope.testDate = new Date();
    $scope.listStudent = [];
    $scope.submitForm = function () {
        if ($scope.form10.$valid) {
            $scope.listStudent.push(this.studentName);
            $scope.studentName = '';
        } else {
            console.log($scope.form10.hehe.$error);
        }
    };
}]);
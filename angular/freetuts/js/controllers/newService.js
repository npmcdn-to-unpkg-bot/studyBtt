/**
 * Created by MSI on 11-Jan-16.
 */
app.controller('newService', ['$scope', 'kt_so_chan', function ($scope, kt_so_chan){
    $scope.thongbao = function () {
        kt_so_chan($scope.number);
    }

}]);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.apps = [
        {
            icon: 'img/gameboard.jpg',
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
        },
        {
            icon: 'img/forecast.jpg',
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
        },
        {
            icon: 'img/move.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
        }
    ];

    $http.get('/angularJs/data/listcard.json').success(function (data) {
        $scope.cards = data;
    });
}]);
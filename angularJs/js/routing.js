/**
 * Created by Truong on 03-Jan-16.
 */
var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/photos/:idImg', {
            controller: 'PhotoController',
            templateUrl: 'views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
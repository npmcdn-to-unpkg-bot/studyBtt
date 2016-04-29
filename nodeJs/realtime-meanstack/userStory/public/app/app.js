/**
 * Created by Truong on 25-Apr-16.
 */
angular.module('MeanStack', ['appRoutes', 'mainCtrl', 'authService', 'uiService', 'userService', 'userCtrl', 'storyService', 'storyCtrl'])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    });
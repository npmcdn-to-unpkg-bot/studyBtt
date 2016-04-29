/**
 * Created by MSI on 29-Apr-16.
 */
angular.module('storyService', [])
    .factory('Story', function ($http) {
        var storyFactory = {};

        storyFactory.createStory = function (storyData) {
            return $http.post('/api', storyData);
        };

        storyFactory.getAllStory = function () {
            return $http.get('/api');
        };

        return storyFactory;
    });
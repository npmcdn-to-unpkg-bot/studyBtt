/**
 * Created by Truong on 03-Jan-16.
 */
app.factory('photos', ['$http', function($http) {
    return $http.get('/angularJs/data/photos.json')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);
/**
 * Created by Truong on 03-Jan-16.
 */
app.factory('forecast', ['$http', function($http) {
    return $http.get('/angularJs/data/forecast.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
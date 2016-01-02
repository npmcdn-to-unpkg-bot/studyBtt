/**
 * Created by Truong on 03-Jan-16.
 */
app.directive('bttElement', function() {
    return {
        restrict: 'E',
        scope: {
            btt: '='
        },
        templateUrl: 'js/directives/bttElementTemplate.html'
    };
});
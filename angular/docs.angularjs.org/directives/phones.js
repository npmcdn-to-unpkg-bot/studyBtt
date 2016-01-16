/**
 * Created by Truong on 17-Jan-16.
 */
phonecatApp.directive('phones', function (){
    return {
        restrict : 'E',
        scope : {
            phone : '='
        },
        templateUrl : 'directives/phones.html'
    }
});
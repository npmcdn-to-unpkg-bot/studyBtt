/**
 * Created by Truong on 1/31/2016.
 */
app.directive('buttonBack', ['$window', function($window) {
  return {
    restrict: 'E',
    templateUrl: 'directives/buttonBack.view.html',
    link: function (scope, elem, attrs) {
      elem.bind('click', function () {
        $window.history.back();
      });
    }
  };
}]);
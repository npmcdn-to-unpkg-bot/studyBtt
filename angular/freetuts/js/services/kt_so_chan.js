/**
 * Created by MSI on 11-Jan-16.
 */
app.factory('kt_so_chan', function ($window){
    return function (number) {
        if (number % 2 == 0) {
            $window.alert(number + " la so chan");
        }
    }
});
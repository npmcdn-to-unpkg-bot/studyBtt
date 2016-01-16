'use strict';

/* Services */

var phoneCatServices = angular.module('phoneCatServices', ['ngResource']);

phoneCatServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('phones/:idPhone.json', {}, {
            query: {method : 'GET', params : {idPhone : 'phones'}, isArray : true}
        });
    }
])
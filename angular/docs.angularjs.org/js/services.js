'use strict';

/* Services */

var phoneCatServices = angular.module('phoneCatServices', ['ngResource']);

phoneCatServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method : 'GET', params : {phoneId : 'phones'}, isArray : true}
        });
    }
])
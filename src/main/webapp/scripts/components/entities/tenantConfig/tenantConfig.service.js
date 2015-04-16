'use strict';

angular.module('mtApp')
    .factory('TenantConfig', function ($resource) {
        return $resource('api/tenantConfigs/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

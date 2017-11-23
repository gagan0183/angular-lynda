var app = angular.module('myApp', ['ngRoute', 'MyControllers']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/partials/search.html',
            controller: 'SearchController'
        });
}]);


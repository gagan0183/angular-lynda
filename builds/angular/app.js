var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http.get('js/data.json').then(function(response) {
        $scope.artists = response.data;
    });
});
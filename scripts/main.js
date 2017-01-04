(function() {
    'use strict';
    
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: './about/about.html' ,
                controller: 'HomeCtrl',
                controllerAs: 'hCtrl'
            })}]);
})();

(function() {
    'use strict';
    
    angular.module('app', [
        'ngRoute',
        'ngAnimate'
    ])
    .config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
            $routeProvider.when('/about', {
                templateUrl: './about/about.html' ,
                controller: 'AboutCtrl',
                controllerAs: 'ACtrl'
            });
            $routeProvider.when('/', {
                templateUrl: './main/main.html' ,
                controller: 'HomeCtrl',
                controllerAs: 'hCtrl'
            });

        });

})();

'use strict';

angular.module('policystationApp', ['policystationApp.auth', 'policystationApp.admin',
    'policystationApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });

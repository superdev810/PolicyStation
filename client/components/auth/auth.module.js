'use strict';

angular.module('policystationApp.auth', ['policystationApp.constants', 'policystationApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

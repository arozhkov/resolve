'use strict';

/**
 * @ngdoc overview
 * @name resolveApp
 * @description
 * # resolveApp
 *
 * Main module of the application.
 */
angular
  .module('resolveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          resolvedData: function(Restangular){
              return Restangular.one('dict').get().then(function (data) {
                var successData = {'success': true, 'data': data};
                return successData; // resolvedData will be resolved with the successData
              }, function () {
                var failureData = {'success': false};
                return failureData; // resolvedData will be resolved with the failureData
              });
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/backend');
  });

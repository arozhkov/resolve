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
   .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }])
   .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        resolvedDict: ['restService', function(restService){
          return restService.getDict();
        }]
      }
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }])
   .config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/backend');
  }])
   .service('restService', ['Restangular', function(Restangular) {
    this.getDict = function() {
      return Restangular.one('dict').get().then(function (data) {
        var successData = {'success': true, 'data': data};
        return successData;
      }, function () {
        var failureData = {'success': false};
        return failureData;
      });
    };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name resolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resolveApp
 */
angular.module('resolveApp')
  .controller('MainCtrl', ['$scope', '$log', 'resolvedDict', function ($scope, $log, resolvedDict) {
    
    $scope.test = 'test value';
    $scope.dict = {};

    $log.info('RESOLVED DATA ' + resolvedDict.success);

    if (resolvedDict.success) {
      $scope.dict = resolvedDict.data.plain();
      $log.info($scope.dict);
    }
    
  }]);

'use strict';

/**
 * @ngdoc function
 * @name resolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resolveApp
 */
angular.module('resolveApp')
  .controller('MainCtrl', ['$scope', '$log', 'resolvedData', function ($scope, $log, resolvedData) {
    
    $scope.test = 'test value';

    $log.info('RESOLVED DATA ' + resolvedData.success);

    if (resolvedData.success) {
      $log.info(resolvedData.data.plain());
    }
    

  }]);

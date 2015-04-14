'use strict';

/**
 * @ngdoc function
 * @name trainingExamplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trainingExamplesApp
 */
angular.module('trainingExamplesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.repeatData = ["1","4","5","6","7"];
    $scope.statusList=["incorrect","wrong","stuff"];
  });

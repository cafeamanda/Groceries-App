'use strict';

angular.module('groceriesApp')

.controller('ChecklistController', ['$scope', '$stateParams', 'groceryFactory', 'groceryClassFactory', function($scope, $stateParams, groceryFactory, groceryClassFactory) {
  console.log('ChecklistController reporting for duty!');
  $scope.groceryList = groceryFactory.getGroceries();
  $scope.classes = groceryClassFactory.getClasses();

  $scope.removeExp = function(index) {
    $scope.groceryList.splice(index, 1);
  };

  $scope.item = {name:"", class:"", done:""};

  $scope.submitItem = function () {
    console.log($scope.item);
    $scope.groceryList.push($scope.item);
    $scope.item = {name:"", class:"", done:""};
  }
}])

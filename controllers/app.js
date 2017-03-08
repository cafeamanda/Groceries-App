'use strict';

angular.module('groceriesApp', ['ui.router', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/',
    views: {
      'header': {
        templateUrl: 'templates/header.html'
      },
      'content': {
        templateUrl: 'views/home.html',
        controller: 'ChecklistController'
      },
      'footer': {
        templateUrl: 'templates/footer.html'
      }
    }
  })
  $urlRouterProvider.otherwise('/');
});

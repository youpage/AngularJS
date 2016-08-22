'use strict'

define([], function () {
  var app = angular.module('demo', ['ngAnimate', 'ui.router'])

  var loadController = function (controllerName) {
    return ['$q', function ($q) {
      var deferred = $q.defer();
      require([controllerName], function () { deferred.resolve(); });
      return deferred.promise;
    }]
  }

  app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider',
    function ($stateProvider, $urlRouterProvider, controllerProvider) {
      app.app_cached_providers = {};

      app.app_cached_providers.$controllerProvider = controllerProvider;

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          resolve: {
            loadController: loadController('HomeController')
          }
        })

        .state('visitor', {
          url: '/visitor',
          templateUrl: 'views/visitor.html',
          params: { user: {} },
          controller: 'VisitorController',
          resolve: {
            loadController: loadController('VisitorController')
          }
        })

        .state('resume', {
          url: '/resume',
          templateUrl: 'views/resume.html',
        })
        .state('resume.summary', {
          url: '/summary',
          templateUrl: 'views/resume-summary.html'
        })
        .state('resume.keyskills', {
          url: '/keyskills',
          templateUrl: 'views/resume-keyskills.html'
        })
        .state('resume.employment', {
          url: '/employment',
          templateUrl: 'views/resume-employment.html'
        })
    }
  ])

  return app
})

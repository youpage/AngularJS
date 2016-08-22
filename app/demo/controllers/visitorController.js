'use strict'

define(['app'], function (app) {
  var injectParams = ['$scope', '$stateParams', '$window']

  var VisitorController = function ($scope, $stateParams, $window) {
    var visitors = $scope.visitors = [];
    $scope.sortType = 'id';
    $scope.sortReverse = true;
    $scope.showArrow;
  
    $scope.columns = [
      { text: 'ID', predicate: 'id', sortable: true, dataType: 'number' },
      { text: 'First Name', predicate: 'firstName', sortable: true },
      { text: 'Last Name', predicate: 'lastName', sortable: true },
      { text: 'Phone', predicate: 'phone', sortable: true },
      { text: 'Serial', predicate: '', sortable: false }
    ];

    $scope.sort = function(c){
      $scope.sortType = c.predicate;
      $scope.sortReverse = !$scope.sortReverse;
    }

    for (var i = 0; i < 50; i++) {
      visitors[i] = { id: i, firstName: randomString(), lastName: randomString(), phone: '(255) 355-44' + (Math.random() * (100) | 0) }
    }

    var user = $stateParams.user
    if (Object.keys(user).length > 0) {
      $scope.receivedUserName = user.firstName + ' ' + user.lastName;
      user.id = visitors.length;
      visitors.push(user);
    }

    $scope.show = function () {
      $window.alert(this.v.serial || 'No serial available');
    }

    function randomString () {
      return new Array(Math.random() * (5) + 5 | 0).join().replace(/(.|$)/g,
        () => {
          return ((Math.random() * 36) | 0).toString(36);
        })
    }
  }

  VisitorController.$inject = injectParams;
  // register dynamic
  app.app_cached_providers.$controllerProvider.register('VisitorController', VisitorController);
  // app.controller('VisitorController', VisitorController)

})
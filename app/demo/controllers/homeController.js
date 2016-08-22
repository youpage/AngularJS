'use strict'

define(['app'], function (app) {
  var injectParams = ['$scope', '$state'];

  var HomeController = function ($scope, $state) {
    $scope.user = {
      firstName: '',
      lastName: '',
      phone: '',
      serial: ''
    };

    $scope.sendData = function () {
      getSerialFromFields();
      $state.go('visitor', { user: $scope.user });
    }

    var total = 0
    $scope.updateSum = function () {
      var sum = [$scope.a | 0, $scope.b | 0, $scope.c | 0];
      $scope.total = total = sumNumbers(sum);
    }

    $scope.updateValues = function () {
      var key = event.keyCode || event.charCode;
      if (key === 13) {
        $scope.msg = '';
        var diff = Number($scope.total) * 100 / total;
        var raise = (diff - 100) / 100;
        var values = [
          Math.round($scope.a * (raise + 1)),
          Math.round($scope.b * (raise + 1)),
          Math.round($scope.c * (raise + 1))
        ]
        // because of the rounding the total may differ than the actual sum
        // correct it by adding || removing the difference from the highest value
        // sample 100 200 300 = 600 change to 455 => rest 1
        // sample 76 152 227 = 455 change to 600 => rest -1   
        var verify = sumNumbers(values);
        var rest = verify - $scope.total;
        if (rest !== 0) {
          console.log(rest);
          var idx = findMax(values);
          values[idx] -= rest;
        }

        $scope.a = values[0];
        $scope.b = values[1];
        $scope.c = values[2];

        total = $scope.total;
      } else {
        $scope.msg = 'Press ENTER to update the input values!';
      }
    }

    $scope.updateSerial = function () {
      var target = event.target;
      var maxLength = target.maxLength;
      var currentLength = target.value.length;
      if (currentLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
          if (next == null)
            break;
          if (next.name && next.name.toLowerCase() == 'serial') {
            next.focus();
            break;
          }
        }
      }

      if (currentLength <= 0) {
        var prev = target;
        while (prev = prev.previousElementSibling) {
          if (prev == null)
            break;
          if (prev.name && prev.name.toLowerCase() == 'serial') {
            prev.focus();
            break;
          }
        }
      }
    }

    function getSerialFromFields () {
      var serial = document.getElementsByName('serial');
      serial.forEach((el) => $scope.user.serial += el.value);
    }

    function sumNumbers (array) {
      return array.map(Number).reduce((a, b) => a + b, 0);
    }

    // need the index of the greatest number
    function findMax (array) {
      var max = -Infinity;
      var idx = -1;
      var len = array.length;
      for (var i = 0; i < len; i++) {
        if (array[i] > max) {
          max = array[i];
          idx = i;
        }
      }
      return idx;
    }
  }

  HomeController.$inject = injectParams;
  // register dynamic
  app.app_cached_providers.$controllerProvider.register('HomeController', HomeController);
// app.controller('HomeController', HomeController)
})
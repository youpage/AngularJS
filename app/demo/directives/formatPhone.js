'use strict'

define(['app'], function (app) {
  var formatPhone = function () {
    var link = function (scope, elem, attrs, ngModel) {
      if (!ngModel) {
        return;
      }

      elem.on('keyup', function () {
        var key = event.keyCode || event.charCode
        if (key != 37 && key != 39)
          this.value = '(' + this.value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{1,3})/, '$1) $2-').replace(/-$|\($/g, '');

        if (this.value.length <= 1) {
          this.value = '';
        }

        ngModel.$setViewValue(this.value);
        scope.$apply();
      })

      elem.on('keypress', function () {
        if (this.value.length >= 14) {
          event.preventDefault();
          return false;
        }
      })
    }

    return {
      require: 'ngModel',
      restrict: 'A',
      link: link
    };
  }

  app.directive('formatPhone', formatPhone);
})

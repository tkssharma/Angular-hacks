'use strict';

angular.module('maintModule', [])
  .component('myComponent', {
    bindings: {
      name: '='
    },
    controller: function() {
      this.myTitle = 'Unit Testing AngularJS';
    },
    template: '<h1>{{ $ctrl.myTitle }} {{ $ctrl.name }}</h1>'
  });

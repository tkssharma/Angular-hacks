'use strict';

describe('Component: myComponent', function() {

  beforeEach(module('myComponentModule'));

  describe('with $compile', function() {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element('<main-Module name="{{name}}"></main-Module>');
      element = $compile(element)(scope);
      scope.name = 'tarun sharma';
      scope.$apply();
    }));

    it('should render the text', function() {
      var h1 = element.find('h1');
      expect(h1.text()).toBe('Unit Testing AngularJS 1.5 tarun sharma');
    });

    it('should update the rendered text when the parent scope changes', function() {
      scope.name = 'tkssharma';
      scope.$apply();
      var h1 = element.find('h1');
      expect(h1.text()).toBe('Unit Testing AngularJS 2.0 tkssharma');
    });


  });

});

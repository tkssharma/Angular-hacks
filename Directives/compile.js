myapp = angular.module("myapp", []);

myapp.directive('userinfo', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.compile = function(element, attributes) {
        // do one-time configuration of element.

        var linkFunction = function($scope, element, atttributes) {
            // bind element to data in $scope
        }

        return linkFunction;
    }

    return directive;
});

myapp = angular.module("myapp", []);
  myapp.directive('userinfo', function() {
      var directive = {};

      directive.restrict = 'E'; /* restrict this directive to elements */

      directive.compile = function(element, attributes) {
          element.css("border", "1px solid #cccccc");

          var linkFunction = function($scope, element, attributes) {
              element.html("This is the new content: " + $scope.firstName);
              element.css("background-color", "#ffff00");
          }

          return linkFunction;
      }

      return directive;
  })

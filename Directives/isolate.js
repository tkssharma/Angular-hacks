

myApp.directive('data', function() {
  return {
    restrict: 'EAC',
    scope : {
      name : =name
    },
    transclude: 'true',
    template: '<input type="text" ng-model="data"/>{{data}}{{name}}',
    link: function(scope, element, attr){
          element.append("<strong>"+user.name+"</strong>");
    }
  };
});
<inut type="text" ng-model="name"/>
<data title="tarun kumar"></data>





myapp = angular.module("myapp", []);

myapp.directive('userinfo', function() {

    var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/myapp/html-templates/userinfo-template.html";

    return directive;
});


myapp.directive('userinfo', function() {
   // isolate scope bindings
    var directive = {};

    directive.restrict = 'E';
    directive.template = "User : {{user.firstName}} {{user.lastName}}";
    directive.scope = {
        user : "=user"
    }

    return directive;
})


myapp.directive('userinfo', function() {
   // isolate scope bindings
    var directive = {};

    directive.restrict = 'E';
    directive.template = "Hello World";
    directive.scope = {}

    return directive;
})

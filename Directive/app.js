.directive(“profile”, function() {
  return {
    template: ‘<ng-include src=”getTemplateUrl()”/>’,
    scope: {
      user: ‘=data’
    },
    restrict: ‘E’,
    controller: function($scope) {
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function() {
        //basic handling
        if ($scope.user.type == “twitter”)
          return “twitter.tpl.html”;
        if ($scope.user.type == “facebook”)
          return “facebook.tpl.html”;
      }
    }
  };
});

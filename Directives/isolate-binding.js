myapp.directive('userinfo', function() {
    var directive = {};

    directive.restrict = 'E';

    directive.template = "User : <b>{{user.firstName}}</b> <b>{{user.lastName}}</b>";

    directive.scope = {
        user : "=user"
    }

    return directive;
});

myapp.controller("MyController", function($scope, $http) {
    $scope.jakob = {};
    $scope.jakob.firstName = "Jakob";
    $scope.jakob.lastName  = "Jenkov";

    $scope.john = {};
    $scope.john.firstName = "John";
    $scope.john.lastName  = "Doe";
});


<userinfo user="jakob"></userinfo>
<userinfo user="john"></userinfo>

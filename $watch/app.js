
angular.module("MyApp", [])
    .controller("MyCtrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.message1 = "First Message!";
        $scope.message2 = "Second Message!";

        $scope.$watchGroup(["message1", "message2"], function(newvalues, oldvalues) {
            console.log("new message: " + newvalues[0] + newvalues[1]);
            console.log("old message: " + oldvalues);
        });

        $timeout(function() {
            $scope.message1 = "New First Message!";
        }, 2000);
        $timeout(function() {
            $scope.message2 = "New Second Message!";
        }, 4000);
    }]);


angular.module("MyApp", [])
    .controller("MyCtrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.colors = ["white", "purple", "pink"];
        $scope.$watchCollection("colors", function(newList, oldList) {
            console.log("new list: " + newList);
            console.log("old list: " + oldList);
        });
        $timeout(function() {
            $scope.colors.push("gray");
        }, 2000);
    }]);


angular.module("MyApp", [])
    .controller("MyCtrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.message = "First Message!";
        $scope.$watch("message", function(newval, oldval) {
            console.log("new message: " + newval);
            console.log("old message: " + oldval);
        });
        $timeout(function() {
            $scope.message = "New Message!";
        }, 2000);
    }]);

/* What happens without an $apply() */
/* Digestion cycle   */
$scope.$apply
$scope.$digest

    angular.module('myApp',[]).controller('MessageController', function($scope) {

      $scope.getMessage = function() {
        setTimeout(function() {
          $scope.message = 'Fetched after 3 seconds';
          $scope.$apply()
          console.log('message:'+$scope.message);
        }, 2000);
      }

      $scope.getMessage();

    });

  $scope.$apply() which automatically triggers  =>  $rootScope.$digest()  =>
         triggers watcher on $scope

    => check if scope model changed

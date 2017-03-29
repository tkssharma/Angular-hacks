var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    $scope.movies = ['Ice Age', 'Frozen'];
});

myApp.directive('myMovie', function() {
  return {
    restrict: 'E',
    transclude: 'true',
    template: '<span ng-transclude></span>',
    link: function(scope, element, attr){
          element.append("<strong>"+attr.title+"</strong>");
    }
  };
});

<div ng-app="myApp" ng-controller="myController">
    <div ng-repeat="movie in movies">
<my-movie title="{{movie}}">
    Movie Title :
</my-movie>
    </div>
</div>

# AngularJS example snippets 1.5

# Why AngularJS?

HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

# Alternatives

Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.

# Extensibility

AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.

# Angular js hacks 01 $scope.$apply

```bash
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
```


# Angular js hacks 01 $scope.$watch

```bash
$scope.$watch("message", function(newval, oldval) {
    console.log("new message: " + newval);
    console.log("old message: " + oldval);
});
$scope.$watchCollection("colors", function(newList, oldList) {
    console.log("new list: " + newList);
    console.log("old list: " + oldList);
});
});
```

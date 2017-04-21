# AngularJS example snippets 1.5

# Why AngularJS?

HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

# Alternatives

Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.

# Extensibility

AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.

### Angular js hacks #01 $scope.$apply

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


### Angular js hacks #02 $scope.$watch

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

### Angular js Testing #03 ngMock : controllers
```bash
describe('Testing for  Controllers', function() {
	
	var results = [
	      {
	         "Title":"Star Wars: Episode IV - A New Hope",
	         "imdbID":"tt0076759"
	      },
	      {
	         "Title":"Star Wars: Episode V - The Empire Strikes Back",
	         "imdbID":"tt0080684"
	      },
	      {
	         "Title":"Star Wars: Episode VI - Return of the Jedi",
	         "imdbID":"tt0086190"
	      }
	  ];
	var $scope;
	var $interval;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$q_, _PopularMovies_) {
		spyOn(_PopularMovies_, 'get').and.callFake(function() {
			var deferred = _$q_.defer();
			deferred.resolve(['tt0076759', 'tt0080684', 'tt0086190']);
			return deferred.promise;
		});
	}));
});
```

### Angular js Testing #03 ngMock : directives
```bash
describe('Movie Result Directive', function() {
    var $compile;
    var $rootScope;

    beforeEach(module('movieApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
    	$compile = _$compile_;
    	$rootScope = _$rootScope_;
    }));

	it('should output movie result to expected HTML format', function() {
		$rootScope.result = result;
		var element = $compile('<movie-result result="result"></movie-result>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toBe(expectedHtml);
    expect($rootScope.$countChildScopes()).toBe(1);
    expect($rootScope.$countWatchers()).toBe(10);
	});
});
```

### Angular js Testing #03 ngMock : Factory
```bash
describe('Testing for new filter', function() { 
    var fromNow;
    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$filter_) {
        fromNow = _$filter_('fromNow');
    }));

    it('should return throw error for undefined', function() {
        expect(fromNow).toThrow('date value cannot be undefined');
    });
});
```



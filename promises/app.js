app.factory("Movies", function($http, $q) {
  return {
    get: function() {
        var deferred = $q.defer();
        $http.get('movies.json')
        .then(function(response){
           deferred.resolve(response.data);
        })
        .catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
    }
  }
})
...
app.controller("MoviesCtrl", function($scope, Movies) {
   Movies.get().then(function(data){
      $scope.movies = data;
   })
   .catch(function(error){
      console.log(error);
   });
})

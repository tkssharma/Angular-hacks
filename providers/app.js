
angular.module("MyApp", [])
    .provider('globalsetting', function() {
        var appname = "interview practices";
        this.setAppName = function(value) {
            appname = value;
        }
        this.$get = function() {
            return {
                appName: appname
            };
        }
    });

    angular.module("MyApp", [])
        .provider('langTrans', function() {
            var lanCode = "en";
            this.setlanName = function(value) {
                lanCode = value;
            }
            this.$get = function() {
                return {
                    setlanName: setlanName
                };
            }
        });

app.config(function(globalsettingProvider) {
    globalsettingProvider.setlanName("en");
});

app.controller("ProductController", function($scope, globalsetting) {
    $scope.name = globalsetting.appName;
});

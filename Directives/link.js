



var app = angular.module('app', []);
app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div>{{greeting}}{{name}}</div>',
        link: function(scope,elem,attr,ctrl){
            scope.name = 'Paul';
            scope.greeting = 'Hey, I am ';
        }
    };
});
















// post link example
var app = angular.module('app', []);
app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{greeting}}{{name}}'+
        '<son></son>'+
        '</div>',
        link: function(scope,elem,attr){
            scope.name = 'Paul';
            scope.greeting = 'Hey, I am ';
        }
    };
});
//
app.directive('son', function () {
    return {
        restrict: 'EA',
        template: '<div class="son">{{sonSays}}</div>',
        link: function(scope,elem,attr){
            scope.sonSays = 'Hey, I am son, and my dad is '+ scope.name;
        }
    };
});

// fix


var app = angular.module('app', []);
app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{greeting}}{{name}}'+
        '<son></son>'+
        '</div>',
        link: {
            pre: function(scope,elem,attr){
                scope.name = 'Paul';
                scope.greeting = 'Hey, I am ';
            }
        }
    };
});
app.directive('son', function () {
    return {
        restrict: 'EA',
        template: '<div class="son">{{sonSays}}</div>',
        link: function(scope,elem,attr){
            scope.sonSays = 'Hey, I am son, and my dad is '+ scope.name;
        }
    };
});

// fix -02
var app = angular.module('app', []);
app.directive('dad', function () {
    return {
        restrict: 'EA',
        template: '<div class="dad">{{greeting}}{{name}}'+
        '<son></son>'+
        '</div>',
        controller: function(){
            this.name = 'Paul'
        },
        link: function(scope,elem,attr,ctrl){
            scope.name = ctrl.name;
            scope.greeting = 'Hey, I am ';
        }
    };
});
app.directive('son', function () {
    return {
        restrict: 'EA',
        require: '^dad',
        template: '<div class="son">{{sonSays}}</div>',
        link: function(scope,elem,attr,ctrl){
            scope.sonSays = 'Hey, I am son, and my dad is '+ ctrl.name;
        }
    };
});

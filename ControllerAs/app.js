angular.module("hackApp")
    .controller("todoController", function($scope) {
        $scope.description = "A list of things to do.";
        $scope.todos = [];
        $scope.newTodo = { "title": "", "completed": false };
        $scope.addTodo = function() {
            var toAdd = { "title": $scope.newTodo.title, "completed": $scope.newTodo.completed };
            $scope.todos.push(toAdd);
        };
    });
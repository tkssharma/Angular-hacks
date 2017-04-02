// firing an event upwards
$scope.$emit('myCustomEvent', 'Data to send');

// firing an event downwards
$scope.$broadcast('myCustomEvent', {
  someProp: 'Sending you an Object!' // send whatever you want
});

// listen for the event in the relevant $scope
$scope.$on('myCustomEvent', function (event, data) {
  console.log(data); // 'Data to send'
});
<!--  -->



<div ng-controller="ParentCtrl as parent" class="ng-scope">
  {{ parent.data }}
      <div ng-controller="SiblingOneCtrl as sib1" class="ng-scope">
          {{ sib1.data }}
             {{ parent.data }}
      </div>
</div>

app.controller('ParentCtrl',
  function ParentCtrl ($scope) {

  $scope.$broadcast('parent', 'Some data'); // going down!

});

app.controller('SiblingOneCtrl',
  function SiblingOneCtrl ($scope) {

  $scope.$on('parent', function (event, data) {
    console.log(data); // 'Some data'
  });

});

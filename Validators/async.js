angular
  .module('app')
  .directive('customValidatorName', customValidatorDirectiveFunc);

function customValidatorDirectiveFunc() {
   return {
     restrict: 'A',
     require: 'ngModel',
     link: function (scope, element, attr, ngModel) {
        // validation callback registration to ngModel

        /*var serverAddr = attr.checkAvailability;

        ngModel.$asyncValidators.invalidUsername = function(modelValue, viewValue) {
          // validation logic here
        }*/
     }
   }
}

<form name="newAccountForm">
    <div>
      <label>Username:</label>
      <input type="text"
             name="usernameField"
             placeholder="username here"
             ng-model="username"/>
    </div>
    <div>
      <label>Password:</label>
      <input type="password"
             name="passwordField"
             ng-model="password"
             placeholder="password here"/>
    </div>
</form>

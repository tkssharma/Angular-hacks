// Service
function InboxService($http) {
  this.getEmails = function getEmails() {
    return $http.get('/emails');
  };
  this.setEmails = function getEmails(_emails) {
    this.email = _emails
  };
}
angular
  .module('app')
  .service('InboxService', InboxService);

// Factory
function InboxService($http) {
  var email;
  return {
    getEmails: function () {
      return email
    },
    setEmails: function (_emails) {
      email = _emails
    }
  };
}
angular
  .module('app')
  .factory('InboxService', InboxService);







//--------------------------------//


  function PersonService($http) {
  function Person() {
    this.foo = function () {

    };
  }
  Person.prototype.bar = function () {

  };
  return Person;
}
angular
  .module('app')
  .factory('PersonService', PersonService);

  function PersonController(PersonService) {
  // new instance!
  var newPerson = new PersonService();
  console.log(newPerson);
}
angular
  .module('app')
  .controller('PersonController', PersonController);

function InboxService($http) {
  this.getEmails = function getEmails() {
    return $http.get('/emails');
  };
}
angular
  .module('app')
  .service('InboxService', InboxService);

function InboxController(InboxService) {
  InboxService
    .getEmails()
    .then(function (response) {
      // use response
    });
}
angular
  .module('app')
  .controller('InboxController', InboxController);

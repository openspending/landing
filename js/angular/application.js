;(function(angular) {

  angular.module('Application', [
    'authClient.services'
  ]);

  angular.module('Application')
    .config([
      '$locationProvider',
      function($locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false,
          rewriteLinks: false
        });
      }
    ]);

})(angular);

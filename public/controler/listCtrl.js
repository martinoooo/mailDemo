(function(){
  'use strict';
  
  angular.module("MailList",[])
    .controller('listCtrl',listCtrl);

  listCtrl.$inject=['$http'];
  
  function listCtrl($http){
    var vm =this;
    
    $http({
            method: 'get',
            url: "/list",
    }).success(function(data){
        console.log(data);
        vm.messages=data;
    })
 
  }

})();

          /*['$scope',
          function($scope) {
            'use strict';*/

             /*messageStorage.get().then(function(messages){
                  $scope.messages=messages.data;
            });*/
           /*$scope.messages= messageStorage.messages;
            $scope.stateParams = $stateParams;

            $scope.delete=function(id){
              if (!("contactId" in id)) {$state.go('list'); return;}
                console.log("contactId" in id);
                var item = utils.findById($scope.messages, id.contactId); 
                messageStorage.delete(item)
                    .then(function(){
                        $state.go('list');
                    })
            };
*/
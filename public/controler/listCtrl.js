(function(){
  'use strict';
  
  angular.module("MailList",[])
    .controller('listCtrl',listCtrl);

  listCtrl.$inject=[];
  function listCtrl(){
    var vm =this;
    vm.messages=[
                  {
                    "id":1291,
                    "lastName":"潘",
                    "firstName":"约翰",
                    "qq":5648612135,
                    "address":"泰国",
                    "phone":123456,
                    "remark":"这不是一个好人11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
                  },
                  {
                    "id":29,
                    "lastName":"凯",
                    "firstName":"丽",
                    "qq":54354354,
                    "address":"英国",
                    "phone":1234567,
                    "remark":"绝对不是好人"
                  },
                  {
                    "id":2299,
                    "lastName":"赛",
                    "firstName":"利亚",
                    "qq":897785465,
                    "address":"澳大利亚",
                    "phone":12345678,
                    "remark":"你好，勇士"
                  },
                  {
                    "id":1360,
                    "lastName":"风",
                    "firstName":"振",
                    "qq":5462123456,
                    "address":"奥地利",
                    "phone":233,
                    "remark":"滴答滴答滴答滴答"
                  },
                  {
                    "id":1449,
                    "lastName":"莎",
                    "firstName":"兰",
                    "qq":4567892,
                    "address":"英国",
                    "phone":21321,
                    "remark":"魔法"
                  },
                  {
                    "id":686,
                    "lastName":"Chris",
                    "firstName":"Evan",
                    "qq":7464543,
                    "address":"美国",
                    "phone":43534,
                    "remark":"skljfdsjld"
                  },
                  {
                    "id":835,
                    "lastName":"Asa",
                    "firstName":"dsdfd",
                    "qq":678876864,
                    "address":"英国",
                    "phone":43543543,
                    "remark":"的实施的方法但是"
                  }
                ];
      

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
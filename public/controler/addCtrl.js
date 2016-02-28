(function(){
  'use strict';
  
  angular.module("MailAdd",[])
    .controller('addCtrl',addCtrl);

  addCtrl.$inject=['$scope','$state',];
  function addCtrl($scope,$state){
    var vm =this;

    vm.item={//id:myRandom(),
              lastName:'',
              firstName:'',
              qq:'',
              address:'',
              phone:'',
              remark:'',
            }
    vm.cancel = cancel;

    vm.add = add;

    function add(isValid) {
        var newContact=vm.item;
        if (!isValid) {
            return;
        }

        for(var x of $scope.messages){
            if (newContact.phone==x.phone){
                alert("号码已注册过");
                return;
            }
        }

        messageStorage.add(newContact)
            .then(function success() {      
                    $scope.item={
                      id:myRandom(),
                      lastName:'',
                      firstName:'',
                      qq:'',
                      address:'',
                      phone:'',
                      remark:'',
                    };
                  
            $state.go('list');
        })
    };

    function cancel(){
        $state.go('list');
    };
  }

})();

/*['$scope','$state','messageStorage',function($scope,$state,messageStorage){
                console.log($scope.messages===messageStorage.messages);
                var count=3000;
                var original=new Array;//原始数组                
                //给原始数组original赋值
                for (var i=0;i<count;i++){
                 original[i]=i+1;
                }
                function myRandom(){
                  for (var num,i=0;i<count;i++){
                  do{
                    num=Math.floor(Math.random()*count);
                   }while(original[num]==null);
                   var m=original[num];
                   original[num]=null;
                   return m;
                  }
                }

                $scope.item={
                      id:myRandom(),
                      lastName:'',
                      firstName:'',
                      qq:'',
                      address:'',
                      phone:'',
                      remark:'',
                }
                
                $scope.add = function (isValid) {
                var newContact=$scope.item;
                if (!isValid) {
                    return;
                }

                for(var x of $scope.messages){
                    if (newContact.phone==x.phone){
                        alert("号码已注册过");
                        return;
                    }
                }

                messageStorage.add(newContact)
                  .then(function success() {      
                    $scope.item={
                      id:myRandom(),
                      lastName:'',
                      firstName:'',
                      qq:'',
                      address:'',
                      phone:'',
                      remark:'',
                    };
                  
                    $state.go('list');
                  })
                  console.log($scope.messages);
                };

                 $scope.cancel = function(){
                    $state.go('list');
                };
                      }]*/
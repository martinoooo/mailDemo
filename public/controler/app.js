angular.module("MailApp",['ui.router','MailList'])
			  .run(['$rootScope', '$state', '$stateParams',
			      function ($rootScope,   $state,   $stateParams) {
			      //方便获得当前状态的方法，绑到根作用域
			      $rootScope.$state = $state;
			      $rootScope.$stateParams = $stateParams;
			      }
			    ]
			  )
			 .config(function($stateProvider, $urlRouterProvider) {
			    $urlRouterProvider.otherwise('/list');
			    $stateProvider
			        .state('list', {
			            url: '/list',
			            templateUrl: 'partials/list.html',
			            controller:'listCtrl',
			            controllerAs: 'vm',
			        })
			        .state('list.add', {
			            url: '/add',
			            templateUrl: 'partials/add.html',
			            /*controller:['$scope','$state','messageStorage',function($scope,$state,messageStorage){*/
			        })

				/*/*listCtrl.$inject=['$scope', '$stateParams','$state'];
					function listCtrl($scope, $stateParams,$state){

					}*/
					
			});

			
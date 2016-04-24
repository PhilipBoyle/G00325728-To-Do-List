
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
//abstract tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

//To Do Tab
  .state('tab.todo', {
    url: '/todo',
    views: {
      'tab-todo': {
        templateUrl: 'templates/tab-todo.html',
        controller: 'ToDoCtrl'
      }
    }
  })


//info tab
  .state('tab.info', {
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: 'InfoCtrl'
      }
    }
  });
//Default tab: To do list
  $urlRouterProvider.otherwise('/tab/todo');

});

define(function (require) {
  'use strict';

  var angular = require('angular');
  // var services = require('./services/services');
  var controllers = require('./controllers/songs');
  // var directives = require('./directives/directives');

  var app = angular.module('likeastore', ['services', 'controllers', 'directives']);

  app.init = function () {
      angular.bootstrap(document, ['likeastore']);
  };

  app.config(['$routeProvider', '$locationProvider', '$httpProvider',
      function ($routeProvider, $locationProvider, $httpProvider) {
          $httpProvider.responseInterceptors.push('httpInterceptor');

          $routeProvider
              when('/', {
      templateUrl: './partials/song-list.html',
      controller: 'SongCtrl'
    }).
    when('/songs/:songId', {
      templateUrl: './partials/song-detail.html',
      controller: 'SongDetailCtrl'
    }).
    when('/add', {
      templateUrl: './partials/addSongs.html',
      controller: 'AddCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

          $locationProvider.html5Mode(true);
      }
  ]);

  app.run(function ($window, auth, user) {
      auth.setAuthorizationHeaders();
      user.initialize();
  });

  return app;
});



// var app = angular.module("MusicApp", ['ngRoute', 'firebase']);


// app.config(['$routeProvider',
//   function($routeProvider) {
//   $routeProvider.
//     when('/', {
//       templateUrl: './partials/song-list.html',
//       controller: 'SongCtrl'
//     }).
//     when('/songs/:songId', {
//       templateUrl: './partials/song-detail.html',
//       controller: 'SongDetailCtrl'
//     }).
//     when('/add', {
//       templateUrl: './partials/addSongs.html',
//       controller: 'AddCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
// }]);
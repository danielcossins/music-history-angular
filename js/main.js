// require.config({
//   paths: {
//       'angular' : '../lib/bower_components/angular/angular.min',
//       'ngRoute' : '../lib/bower_components/angular-route/angular-route',
//       'jquery': '../lib/bower_components/jquery/dist/jquery.min',
//       'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
//       'firebase': '../lib/bower_components/firebase/firebase',
//       'angularfire': '../lib/bower_components/angularfire/dist/angularfire'
//   },
//   shim: {
//     'angular': {
//       exports : 'angular'
//     },
//     'ngRoute': {
//         deps: ['angular']
//     },
//     'angularfilter': {
//         deps: ['angular']
//     },
//     'bootstrap': ['jquery'],
//     'firebase': {
//       exports: 'Firebase'
//     },
//     'angularfire': {
//       deps: ['angular', 'firebase'],
//       exports: 'angularfire'
//     }
//   },
//   priority: [
//     "angular"
//   ],
//   baseUrl: './js'
// });

require([
  'angular',
  'app'
  ], function(angular, app) {
  var $html = angular.element(document.getElementsByTagName('body')[0]);
      angular.element($html).ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['MusicApp']);
    });
  }
);

// var app = angular.module('likeastore', ['services', 'controllers', 'directives']);

// app.init = function () {
//   angular.bootstrap(document, ['likeastore']);
// };
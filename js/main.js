require.config({
  paths: {
      'angular' : '../../lib/bower_components/angular/angular',
      // 'ngResource': '../../lib/bower_components/angular-resource/angular-resource',
      // 'ngCookies': '../../lib/bower_components/angular-cookies/angular-cookies',
      // 'ngProgressLite': '../../lib/bower_components/ngprogress-lite/ngprogress-lite',




    'jquery': '../../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../../lib/bower_components/lodash/lodash.min',
    'firebase': '../../lib/bower_components/firebase/firebase',
    'hbs': '../../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../../lib/bower_components/q/q',
    'matchHeight': '../../lib/bower_components/matchHeight/jquery.matchHeight-min',
    'es6': '../../lib/bower_components/requirejs-babel/es6',
    'babel': '../../lib/bower_components/requirejs-babel/babel-5.8.22.min'
  },
  shim: {
      ngResource: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngCookies: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngProgress: {
          deps: ['angular'],
          exports: 'angular'
      },
      angular: {
          exports : 'angular'
      },
      'bootstrap': ['jquery'],
      'matchHeight': ['jquery'],
      'firebase': {
        exports: 'Firebase'
      }
  },
  baseUrl: '/js'
});

require(['app'], function (app) {
  app.init();
});

// var app = angular.module('likeastore', ['services', 'controllers', 'directives']);

// app.init = function () {
//   angular.bootstrap(document, ['likeastore']);
// };
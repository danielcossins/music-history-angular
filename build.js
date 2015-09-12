({
  baseUrl: "./js",
  paths: {
      'angular' : '../lib/bower_components/angular/angular.min',
      'ngRoute' : '../lib/bower_components/angular-route/angular-route',
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      'firebase': '../lib/bower_components/firebase/firebase',
      'angularfire': '../lib/bower_components/angularfire/dist/angularfire'
  },
  shim: {
    'angular': {
      exports : 'angular'
    },
    'ngRoute': {
        deps: ['angular']
    },
    'angularfilter': {
        deps: ['angular']
    },
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    },
    'angularfire': {
      deps: ['angular', 'firebase'],
      exports: 'angularfire'
    },
  },
    name: "main",
    out: "main-built.js"
})
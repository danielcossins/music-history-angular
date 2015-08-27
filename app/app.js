var app = angular.module("MusicApp", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
    when('/songs', {
      templateUrl: './partials/song-list.html',
      controller: 'SongCtrl'
    }).
    when('/songs/:songId', {
      templateUrl: './partials/song-detail.html',
      controller: 'SongDetailCtrl'
    }).
    otherwise({
      redirectTo: '/songs'
    });
}]);
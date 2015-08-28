var app = angular.module("MusicApp", ['ngRoute', 'firebase']);


app.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
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
}]);
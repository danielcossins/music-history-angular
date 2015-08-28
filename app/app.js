var app = angular.module("MusicApp", ['ngRoute', 'firebase']);

// app.controller("SampleCtrl", function($scope, $firebaseObject) {
//   var ref = new Firebase("https://flickering-fire-4801.firebaseio.com");
//   // download the data into a local object
//   var syncObject = $firebaseObject(ref);
//   // synchronize the object with a three-way data binding
//   // click on `index.html` above to see it used in the DOM!
//   syncObject.$bindTo($scope, "data");
// });

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
    otherwise({
      redirectTo: '/'
    });
}]);
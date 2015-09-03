'use strict';
define([
  'angular',
  'angularfire',
  'ngRoute'
], function(angular) {
  angular.module('MusicApp.view1', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../../paritals/song-list',
      controller: 'SongCtrl'
    });
  }])
  .controller('SongCtrl', ["$scope", "$firebaseArray", "getSongs",
    function($scope, $firebaseArray, getSongs) {
    
    var ref = new Firebase("https://flickering-fire-4801.firebaseio.com/songs"); 

    // Data from firebase 
    $scope.songs = $firebaseArray(ref);

    $scope.killSong = function(song) {
      var songIndex = $scope.songs.indexOf(song);
      if (songIndex >= 0) {
        $scope.songs.splice(songIndex, 1);
      }
    };

    // $scope.addSongs = function() {
    //   $scope.todos.push({name: $scope.newTodo, complete: false});
    //   $scope.newTodo = "";
    // };

  }]);
});
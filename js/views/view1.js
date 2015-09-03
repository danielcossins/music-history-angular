'use strict';
define([
  'angular',
  'ngRoute'
], function(angular) {
  angular.module('MusicApp.view1', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../../paritals/song-list',
      controller: 'SongCtrl'
    });
  }])
  .controller('SongCtrl', ["$scope", "getSongs",
    function($scope, getSongs) {

    $scope.killSong = function(song) {
      var songIndex = $scope.songs.indexOf(song);
      if (songIndex >= 0) {
        $scope.songs.splice(songIndex, 1);
      }
    };

    $scope.addSongs = function() {
      $scope.todos.push({name: $scope.newTodo, complete: false});
      $scope.newTodo = "";
    };

    $scope.songs=getSongs;
    console.log($scope.songs);
  }]);
});
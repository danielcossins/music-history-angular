app.controller("SongCtrl", ["$scope", "getSongs", 
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

  getSongs
  .then(function(data){
    $scope.songs = data;
  },function(error){
    console.log(error);
  });
}]);
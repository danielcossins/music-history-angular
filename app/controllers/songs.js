app.controller("SongCtrl", function($scope, $q) {

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








  function getSongList(){
    return $q(function(resolve, reject){
      $.ajax({
        url: "../data/songs.json"
      })
      .done(function(response){
        resolve(response.songs);
      })
      .fail(function(xhr, status, error){
        reject(error);
      });
    });
  }

  getSongList()
  .then(function(data){
    $scope.songs = data;
  },function(error){
    console.log(error);
  });
});
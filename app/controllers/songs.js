app.controller("SongCtrl", ["$scope", "getSongs",
  function($scope, getSongs/*, $firebaseObject*/) {
  // var ref = new Firebase("https://flickering-fire-4801.firebaseio.com");
  // // $scope.data = $firebaseObject(ref);

  // // download the data into a local object
  // var syncObject = $firebaseObject(ref);
  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo($scope, "data");
  // console.log(syncObject);


///////////////////firebase
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
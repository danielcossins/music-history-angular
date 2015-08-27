app.factory("getSongs", function($q, $http) {

  function getSongList() {

    return $q(function(resolve, reject) {
      $http.get('./data/songs.json')
      .success(
        function(objectFromJSONFile) {
          console.log(objectFromJSONFile.songs);
          resolve(objectFromJSONFile.songs);
        },function(error) {
          console.log(objectFromJSONFile);
          reject(error);
        }
      );
    });
  }
  return getSongList();
});
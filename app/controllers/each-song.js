app.controller("SongDetailCtrl", ["$scope", "$routeParams", "getSongs",
  function($scope, $routeParams, getSongs) {
    $scope.selectedSong = {};
    $scope.songId = $routeParams.songId;

    console.log($routeParams);
    console.log("$scope.songId", $scope.songId);

    getSongs.then(
      function(promiseResolutionData) {
        console.log("promiseResolutionData", promiseResolutionData);

        $scope.selectedSong = promiseResolutionData.filter(function(song) {
          console.log(song);
          console.log($scope.songId);
          console.log($scope.selectedSong);
          return song.songId === parseInt($scope.songId);
        })[0];

        console.log("$scope.selectedSong", $scope.selectedSong);
      },
      function(promiseRejectionError) {
        console.log("error", promiseRejectionError);
      }
    );
  }
]);
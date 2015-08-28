app.factory("getSongs", function($q, $http, $firebaseArray) {
  var ref = new Firebase("https://flickering-fire-4801.firebaseio.com/songs");
  
  return $firebaseArray(ref);
  // var obj = $firebaseObject(ref);

  // // to take an action after the data loads, use the $loaded() promise
  // obj.$loaded().then(function() {
  //   console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

  // // To iterate the key/value pairs of the object, use angular.forEach()
  // angular.forEach(obj, function(value, key) {
  //   console.log(key, value);
  // });
  // });

  
  
  // function getSongList() {

  //   return $q(function(resolve, reject) {
  //     $http.get('https://flickering-fire-4801.firebaseio.com/songs')
  //     .success(
  //       function(objectFromJSONFile) {
  //         console.log(objectFromJSONFile.songs);
  //         resolve(objectFromJSONFile.songs);
  //       },function(error) {
  //         console.log(objectFromJSONFile);
  //         reject(error);
  //       }
  //     );
  //   });
  // }
  // return getSongList(); 




  // thingy.success(
  //   function(data) {
  //     console.log(data.songs);
  //     resolve(data.songs);
  //   },function(error) {
  //     console.log(data);
  //     reject(error);
  //   }
  // );







  // function getSongList() {

  //   return $q(function(resolve, reject) {
  //     $http.get('./data/songs.json')
  //     .success(
  //       function(objectFromJSONFile) {
  //         console.log(objectFromJSONFile.songs);
  //         resolve(objectFromJSONFile.songs);
  //       },function(error) {
  //         console.log(objectFromJSONFile);
  //         reject(error);
  //       }
  //     );
  //   });
  // }
  // return getSongList();
});
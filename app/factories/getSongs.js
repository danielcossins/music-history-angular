app.factory("getSongs", function($q, $http, $firebaseArray) {
  var ref = new Firebase("https://flickering-fire-4801.firebaseio.com/songs");
  
  return $firebaseArray(ref);
});
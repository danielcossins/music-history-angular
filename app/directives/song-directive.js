app.directive("musicHistorySongBrief", function() {
  return {
    restrict: "E", // Restrict directive to element
    scope: {
      selectedSong: "=song",  // Bind the `song` attribute in the DOM to the selectedSong locally scoped variable
      maxRating: "=" // Bind `max-rating` to maxRating local variable
    },
    templateUrl: "partials/song-detail.html"
  };
});
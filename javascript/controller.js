angular.module('movieDBControllers',[])
.controller('MovieListController',function($scope,MovieListService, myMovieConfig) {

   var url = myMovieConfig.moviesEndpoint + '/popular?api_key=' + myMovieConfig.apiKey;
   $scope.movieList = [];
   $scope.loading = true;
   
   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; 
          $scope.loading = false; 
      }
      ).catch(
      function(error) { 
          console.log('error', error)
        });
})

.controller('MovieTopRatedController',function($scope,
MovieListService, myMovieConfig) {

   var url = myMovieConfig.moviesEndpoint + '/top_rated?api_key=' + myMovieConfig.apiKey;
   $scope.movieList = [];
   $scope.loading = true;
   
   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; 
          $scope.loading = false; 
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})

.controller('MovieNowPlayingController',function($scope,
MovieListService, myMovieConfig) {

   var url = myMovieConfig.moviesEndpoint + '/now_playing?api_key=' + myMovieConfig.apiKey;
   $scope.movieList = [];
   $scope.loading = true;
   
   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; 
          $scope.loading = false; 
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})

.controller('MovieUpcomingController',function($scope,
MovieListService, myMovieConfig) {

   var url = myMovieConfig.moviesEndpoint + '/upcoming?api_key=' + myMovieConfig.apiKey;
   $scope.movieList = [];
   $scope.loading = true;
  
   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results; 
          $scope.loading = false; 
      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
})

.controller("MovieDetailsController", function($scope, $location, 
  $routeParams, MovieListService, myMovieConfig) {

  $scope.title = "Movie Details";
  var id = $routeParams.movieId;
  var url = myMovieConfig.moviesEndpoint + '/' + id + '?api_key=' + myMovieConfig.apiKey;
  MovieListService.getList(url).then(
    function(result){
      $scope.movie = result.data;
      }
    ).catch(
    function(error) {
      $location.path('/error/' + error.data.status_message + '/' + error.status)
    });

});



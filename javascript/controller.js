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
});
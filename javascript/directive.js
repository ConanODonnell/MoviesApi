angular.module("movieDBDirectives", []).directive("movieInfoBox", 
	function() {
		return {
			restrict: "E", 
			scope: {
				movie: "=info"
			},
			templateUrl: "templates/directives/movie-info-box.html"
		};
	});
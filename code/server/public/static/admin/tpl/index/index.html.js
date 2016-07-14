angular.module("admin").controller("IndexController", [
    "$scope",
    "subject",
    "$location",
    function($scope, subject, $location) {
		if(!subject.isAuthenticated()) {
			$location.path("/passport/signin");
			return;
		}
		
		$scope.content = "Hello world!";
		
		$scope.logout = function() {
			subject.logout();
			$location.path("/passport/signin");
		}
	}
]);

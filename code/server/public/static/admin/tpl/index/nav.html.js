angular.module("admin").controller("NavController", [
    "$scope",
    "subject",
    "$location",
    function($scope, subject, $location) {
		if(!subject.isAuthenticated()) {
			$location.path("/passport/signin");
			return;
		}
	}
]);

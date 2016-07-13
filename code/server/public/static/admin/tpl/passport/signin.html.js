angular.module("admin").controller("SigninController", ["$scope", function($scope) {
	"use strict";
	
	$scope.content = "hello world!";
	
	$scope.submit = function() {
		alert(1);
	}
}]);

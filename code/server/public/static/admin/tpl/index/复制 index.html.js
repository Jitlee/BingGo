angular.module("admin").controller("IndexController", [
    "$scope",
    "subject",
    "$location",
    function($scope, subject, $location) {
		if(!subject.isAuthenticated()) {
			$location.path("/passport/signin");
			return;
		}
		
		$scope.menus = [
			{ title: "会员管理", icon: "icon-huiyuan" },
			{ title: "系统管理", icon: "icon-shezhi" },
			{ title: "设置管理", icon: "icon-pingtai" },
		];
		
		$scope.content = "Hello world!";
		
		$scope.logout = function() {
			subject.logout();
			$location.path("/passport/signin");
		}
	}
]);

angular.module("admin").controller("SideController", [
    "$scope",
    function($scope) {		
		$scope.menus = [
			{ title: "会员管理", icon: "icon-huiyuan" },
			{ title: "系统管理", icon: "icon-shezhi" },
			{ title: "设置管理", icon: "icon-pingtai" },
		];
	}
]);

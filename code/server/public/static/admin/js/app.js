var app = angular.module("admin", [
	"ui.router",
	"ui.router.requirePolyfill",
	"ui.bootstrap",
	"angularShiro",
], function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
})/*.run([
	"$rootScope", "$state", "$stateParams",
	function ($rootScope,$state, $stateParams) {
		$rootScope.$state = $state;
//		$rootScope.$stateParams = $stateParams;
	}
])*/;

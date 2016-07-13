;(function() {
	"use strict";
	app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state("index", {
				url: "/",
				template: "<h1>Hello world!</h1>"
			})
			
			// 登陆相关
			.state("passport", {
				url: "/passport",
				templateUrl: tpl("passport/_index")
			})
			.state("passport.signin", {
				url: "/signin",
				templateUrl: tpl("passport/signin")
			})
	}]);
	
	function tpl(path) {
		return ["/static/admin/tpl/", path, ".html"].join(""); 
	};
})();

;(function() {
	"use strict";
	app.config([
	    "$stateProvider",
	    "$urlRouterProvider",
	    "angularShiroConfigProvider",
	    function($stateProvider, $urlRouterProvider, config) {
		$urlRouterProvider.otherwise("/");
		
		// Subject must be
		// authenticated to
		// access any path
		config.setFilter("/**/*","authc");
		config.setAuthenticateUrl("/admin/passport/authenticate");
		config.setLoginPath("/passport/signin");
		
		$stateProvider
			.state("index", {
				url: "/",
				templateUrl: tpl("index/index")
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

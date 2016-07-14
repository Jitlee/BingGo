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
		var configOptions = config.$get[0]();
		configOptions.login.api = "/admin/passport/authenticate";
		configOptions.login.path = "/passport/signin";
		configOptions.logout.path = "/passport/signin";
		configOptions.logout.api = "/admin/passport/signout";
		
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

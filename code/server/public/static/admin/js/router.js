;(function() {
	"use strict";
	app.config([
	    "$stateProvider",
	    "$urlRouterProvider",
	    "angularShiroConfigProvider",
	    function($stateProvider, $urlRouterProvider, config) {
		$urlRouterProvider.otherwise("/index/desktop");
		
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
				url: "/index",
				views: {
					"": { templateUrl: tpl("index/_index") },
					"side@index": { templateUrl: tpl("index/side") },
					"nav@index": { templateUrl: tpl("index/nav") },
				}
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
			
			// 桌面
			.state("index.desktop", {
				url: "/desktop",
				templateUrl: tpl("desktop/index")
			})

			// 关于
			.state("index.about", {
				url: "/about",
				templateUrl: tpl("about/_index")
			})
	}]);
	
	function tpl(path) {
		return ["/static/admin/tpl/", path, ".html"].join(""); 
	};
})();

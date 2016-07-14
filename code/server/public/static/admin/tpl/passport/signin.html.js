angular.module("admin").controller("SigninController", [
    "$scope",
    "subject",
    "usernamePasswordToken",
    "$location",
    "$filter",
    function($scope, subject, usernamePasswordToken, $location) {
		$scope.error = "";
		$scope.token = usernamePasswordToken;
		$scope.token.setRememberMe(true);
		
		$scope.submit = function() {
			if(validate()) {
				subject.login($scope.token).then(function() {
					$location.path("/");
				}, function(data) {
					console.error(data)
				});
			}
		}
		
		function validate() {
			if(!$scope.token.username) {
				$scope.error = "请输入用户名";
				return false;
			}
			
			if(!$scope.token.password) {
				$scope.error = "请输入密码";
				return false;
			}
			return true;
		}
}]);

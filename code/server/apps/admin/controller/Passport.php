<?php
namespace app\admin\controller;

/**
 * swagger: 登录相关
 */
class Passport {
	/**
	 * post: 发送验证码
	 * path: authenticate
	 * method: authenticate
	 */
	public function authenticate() {
		$request_body = file_get_contents('php://input');
		$data = json_decode($request_body);
//		echo 'username:'.$data->token->principal;
//		echo 'password:'.$data->token->credentials;
		$userinfo = [
			'info' => [
				'authc'	=> [
					'credentials'		=> [
						'username'		=> $data->token->principal,
						'phone'			=> '18922864361',
						'email'			=> 'www.wpj@163.com'
					],
					'principal'			=> [
						'username'		=> $data->token->principal,
						'phone'			=> '18922864361',
						'email'			=> 'www.wpj@163.com',
						'roleName'			=> '超级管理员'
					]
				],
				'authz' => [
					'roles'	=>			[
						'SUPER'
					],
					'permissions' =>	[
						'address:view,create,edit,delete'
					]
				]
			]
		];
		session('userinfo', $userinfo);

		return json($userinfo);
	}
	
	public function signout() {
		session('userinfo', null);
		return true;
	}
}
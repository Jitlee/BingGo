<?php
//配置文件
return [
	'view_replace_str'	=> [	// 模版渲染输出
		'__LIBS__'		=> '/static/libs',
		'__JS__'			=> '/static/admin/js',
		'__CSS__'		=> '/static/admin/css',
		'__IMG__'		=> '/static/admin/img',
		'__ICONFONT__'		=> '//at.alicdn.com/t/font_1468569467_047338.css',
		'__BOOT__'		=> '//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css',
	],
	'session'                => [
	    'prefix'         => 'admin',
	    'type'           => '',
	    'auto_start'     => true,
	],
];
import React from 'react';
import Page from './../page/page/index';
import Login from './../page/login/index';
import Page404 from './../page/404page/index';
import Home from './../page/home/index';
import Talentservice from './../page/talentservice/index';
import Announce from './../page/announce/index';
const routes = [{
		path: '/',
		component: Page,
		exact: true,
		routes: [{
			path: 'home',
			name:'首页',
			component: Home,
			exact: true,
		},{
			path: '/talentservice',
			name:'人才服务',
			component: Talentservice,
			exact: true,
		},{
			path: '/announce',
			name:'在线公示',
			component: Announce,
			exact: true,
		}]

	},
	{
		path: '/login',
		component: Login,
		exact: true
	},
	{
		path: '/404',
		component: Page404,
		exact: true
	}
]
export {
	routes
}
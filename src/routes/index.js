import React from 'react';
import Page from './../page/page/index';
import Login from './../page/login/index';
import Page404 from './../page/404page/index';
import Home from './../page/home/index.tsx';
//import Talentservice from './../page/talentservice/index';
import Announce from './../page/announce/index';
import TodoList from './../page/todolist'
const routes = [
	{
		path: '/login',
		component: Login,
		exact: true,
	},
	{
		path: '/tdList',
		component: TodoList,
		exact: true,
	},
	{
		path: '/404',
		component: Page404,
		exact: true,
	},
	{
		path: '/',
		component: Page,
		
		routes: [{
			path: '/home',
			name: '首页',
			component: Home,

		}, 
//		{
//			path: '/talentservice',
//			name: '人才服务',
//			component: Talentservice,
//
//		}, 
		{
			path: '/announce',
			name: '在线公示',
			component: Announce,

		}]

	},
]
export {
	routes
}
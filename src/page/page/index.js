import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './index.less'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  SnippetsOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route,
			current: 'home'
		}

	}
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	};
	render() {
		const route = this.state.route;

		return(
			<div>
				<div className="header">
					<div className="header__wrap">
		                <div className="header__menu">
			                {/*<div><Link to="/home">首页</Link></div>
			                <div><Link to="/talentservice">人才 服务</Link></div>
			               <div><Link to="/announce">在线公示</Link></div>*/}
			                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
						        <Menu.Item key="home">
						          <SnippetsOutlined />
						          <Link to="/home">首页</Link>
						        </Menu.Item>
						        <Menu.Item key="talentservice">
						          <AppstoreOutlined />
						          <Link to="/talentservice">人才 服务</Link>
						        </Menu.Item>
						        <Menu.Item key="announce">
						          <SettingOutlined />
						          <Link to="/announce">在线公示</Link>
						        </Menu.Item>
						     </Menu>
		                </div>
		            </div>
		            
				</div> 
				
				<div className = "content">
                  {renderRoutes(route.routes)}
                  <Redirect from="/" to="/home" />
				</div>
				<div className = "footer" style={{textAlign:'center'}}>
					<div> 版权所有： 萧山区人才管理中心 地址： 萧山区南岸叙府路西段13号 </div> 
					<div> 备案号： 蜀ICP备16032454号 </div>
	
				</div>
			</div>
		)
	}
	inijected() {

	}
}
export default Page;
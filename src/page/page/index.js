import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import './index.css'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route
		}
     console.log(this.state.route.children,123)
	}
	render() {
		const route = this.state.route;
		
		return(
			<div>
				<div className="header">
					<div className="header__wrap">
		                <div className="header__menu">
			                <div><Link to="/home">首页</Link></div>
			                <div><Link to="/talentservice">人才 服务</Link></div>
			                <div><Link to="/announce">在线公示</Link></div>
		                </div>
		            </div>
				</div> 
				<div className = "content">
			
                    {renderRoutes(route.routes)}
                  
				   14
				</div>
				<div className = "footer" style={{textAlign:'center'}}>
					<div> 版权所有： 萧山区人才管理中心 地址： 萧山区南岸叙府路西段13号 </div> 
					<div> 备案号： 蜀ICP备16032454号 </div>
	
				</div>
			</div>
		)
	}
	inijected(){
	
	}
}
export default Page;
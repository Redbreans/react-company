import React from 'react';
import './index.less'
import { Button } from 'antd';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			codeSn: "",
			loginPwd: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.accountChange = this.accountChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.goToHome = this.goToHome.bind(this);
	}
	handleSubmit(e) {
		console.log("eee提交", this.state)
//		React.$goBack()
		e.preventDefault();
	}
	accountChange(e) {

		this.setState({
			account: e.target.value
		})
	}
	passwordChange(e) {
		console.log("密码", e)
		this.setState({
			loginPwd: e.target.value
		})
	}
	goToHome() {
		this.props.history.push('/home')
		
	}
	render() {
		return(
			<div className="login">
			
				<div className="main-content">
					<div style={{padding:'10px 0',textAlign:'right'}}>
						<button onClick={this.goToHome} className="home" type="primary">返回首页</button>
					</div>
					
					<div className="" style={{position:'relative',height:'calc(100vh - 60px)'}}>
						<div className="login-box">
							<h1>密码登录</h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-item">
									<label>
									    账号:
									 </label>
									 <input type="text" value={this.state.account} name="name" onChange={this.accountChange} />
								</div>
							  	<div className="form-item">
									<label>
									    密码:
									 </label>
									 <input type="password" value={this.state.loginPwd} name="name" onChange={this.passwordChange} />
								</div>
								<div className="form-item">
									<label>
									 </label>
									<input type="submit" value="登录" />
								</div>
							  
							</form>
						</div>
					</div>
					
				</div>
			
			</div>
		)
	}
}
export default Login;
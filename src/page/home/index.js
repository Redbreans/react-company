import React from 'react';
import { Button, Carousel } from 'antd'; //引入
import './index.less'
import Request from './../../../public/js/request.js'
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.getBannerList = this.getBannerList.bind(this)
	}
	componentWillMount() {
		console.log('componentWillMount11')
	}
	componentDidMount() {
		console.log('componentDidMount22');
		this.getBannerList()
	}
	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps33')
	}
	shouldComponentUpdate(newProps, newState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate444');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate55555')
	}
	componentWillUnmount() {
		console.log('componentWillUnmount66666')
	}
	getBannerList() {
		let param = {
			positionCode: "pcHome",
			size: 8,
			start: 0
		}
		//		fetch('/online/onlineAdResources/list', {
		//				method: 'POST',
		//				body: JSON.stringify(param),
		//				headers: {
		//					"Content-Type": "application/json; charset=utf-8",
		//					"version": "1.0.0"
		//				}
		//			}).then(function(response) {
		//				return response.json();
		//			})
		//			.then(function(myJson) {
		//				console.log(myJson, "请求成功");
		//			});
		Request('/online/onlineAdResources/list',param).then(data => {
			console.log("banner成功",data)
		})
	}
	render() {
		return(
			<div className="home">
				{/*<div className=""></div>*/}
				<div className="banner">
					<Carousel autoplay>
					    <div>
					      <h3>1</h3>
					    </div>
					    <div>
					      <h3>2</h3>
					    </div>
					    <div>
					      <h3>3</h3>
					    </div>
					    <div>
					      <h3>4</h3>
					    </div>
					</Carousel>
				</div>
				
			 </div>
		)
	}
}
export default Home;
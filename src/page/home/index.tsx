import React from 'react';
import { Button, Carousel } from 'antd'; //引入
import './index.less'
import OnlineApi from './../../api/api.js'
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			readUrl:process.env.API_ROOT + '/common/commonFileInfo/download?isDownload=no&fileId',
			bannerList:[]
		}
		console.log("state",this.state)
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
		let data = {
			positionCode: "pcHome",
			size: 8,
			start: 0
		}
		OnlineApi.apiOnlineOnlineAdResourcesList(data).then(data => {
			console.log("banner成功", data);
			
			this.setState((prevState) => {
			let bannerList = [...prevState.bannerList];
			console.log("prevState",prevState)
				data.forEach(item => {
					//bannerList.push(this.state.readUrl + item.resourceId)
					bannerList.push(this.state.readUrl+'?=5e81abf79c4f076b32caca14')
				})
				return {bannerList};
			})
			console.log(this.state)
		}).catch(error => {
			console.log("error",error)
		})
	}
	render() {
		return(
			<div className="home">
				{/*<div className=""></div>*/}
				<div className="banner">
					<Carousel>
					{this.state.bannerList.map((item,index) => {
						return (
						<div key={index}>
					      <img src={item} alt="" />
					    </div>
					    )}
					)}
 
					</Carousel>
				</div>
				
			 </div>
		)
	}
}
export default Home;
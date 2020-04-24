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
		
		this.getBannerList = this.getBannerList.bind(this)
	}
	componentWillMount() {
		
	}
	componentDidMount() {
		
		this.getBannerList()
	}
	componentWillReceiveProps(newProps) {
		
	}
	shouldComponentUpdate(newProps, newState) {
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		
	}
	componentDidUpdate(prevProps, prevState) {
		
	}
	componentWillUnmount() {
		
	}
	getBannerList() {
		let data = {
			positionCode: "pcHome",
			size: 8,
			start: 0
		}
		OnlineApi.apiOnlineOnlineAdResourcesList(data).then(body => {
			console.log("banner成功", body);
			
			this.setState((prevState) => {
				let bannerList = [...prevState.bannerList];
				bannerList.push(this.state.readUrl+'=5e9fa6e4f367b034ca1044eb');
				bannerList.push(this.state.readUrl+'=5e9fa79af367b034ca1044ed');
				if(body){
					body.forEach(item => {
						//bannerList.push(this.state.readUrl + item.resourceId)
						//bannerList.push(this.state.readUrl+'=5e9fa79af367b034ca1044ed')
					})
				}
				return {bannerList};
			})
			
		}).catch(error => {
			console.log("error",error)
		})
	}
	render() {
	let list = [1,2,3,4,5,6];
		return(
			<div className="home">
				{/*<div className=""></div>*/}
				<div className="banner">
					<Carousel autoplay>
					{this.state.bannerList.map((item,index) => {
						return (
							<div key={index}>
						      <img src={item} alt="" />
						    </div>
					    )}
					)}
 
					</Carousel>
				</div>
				<div className="page-content">
					<div className="content-item section">
						<div className="section-item service">
							<div className="content-title">
								<div className="content-title-left">热门服务</div>
								<div className="content-title-rig">查看全部></div>
							</div>
							<div className="service-content">
								{list.map((item,i) =>{
								
									return(
										<div key={i} className="service-content-item">
											<div className="img-box">
												<img src={this.state.readUrl+i}
												onError={(e) => {e.target.onerror = null;e.target.src=process.env.PUBLIC_URL+'/img/service_icon1.png'}}
												/>
											</div>
											<div className="service-title">
												人才房申请{i}
											</div>
										</div>
									)
								
								})
								}
								
							</div>
						</div>
						<div className="section-item announce">
							<div className="content-title">
								<div className="content-title-left">在线公示</div>
								<div className="content-title-rig">查看全部></div>
							</div>
							<div className="" style={{paddingTop:'20px'}}>
								{[1,2,3,4,5].map((item,index) => {
									return (
										<div key={item} className="announce-item">四川省{item}关事业单位基本养老保险&nbsp;&nbsp;&nbsp;2020/04/22 13:20:35</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
				
				
			 </div>
		)
	}
}
export default Home;
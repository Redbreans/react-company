import React from 'react';
import { Button, Carousel, Input } from 'antd'; //引入
//无状态组件
const IndexUi = (props) => {

	let list = props.list;
	return(
		<div className="main-common">
			<div className="talentService main-common-content">
				<div style={{padding:'10px'}}>
					<Input value={props.inputValue} style={{width:'300px'}} onChange={props.inputValueChange}/>
					<Button type = "primary" style={{marginLeft:'10px'}} onClick={props.addData}>提交</Button>
				</div>
				<div className="list">
					{list.map((item,index) => {
						return (
								<div key={index} onClick={() => props.deleteData(index)}>
									{item}
								</div>
								)
					})}
				</div>
			</div>
		</div>

	)
}
//class IndexUi extands React.Component {
//	render() {
//	let list = this.state.list;
//		return(
//			<div className="talentService">
//				<div style={{padding:'10px'}}>
//					<Input value={this.state.inputValue} style={{width:'300px'}} onChange={this.inputValueChange}/>
//					<Button type = "primary" style={{marginLeft:'10px'}} onClick={this.addData}>提交</Button>
//				</div>
//				<div className="list">
//					{list.map((item,index) => {
//						return (
//								<div key={index} onClick={this.deleteData.bind(this,index)}>
//									{item}
//								</div>
//								)
//					})}
//				</div>
//				
//			</div>
//		)
//
//	}
//
//}
export default IndexUi;
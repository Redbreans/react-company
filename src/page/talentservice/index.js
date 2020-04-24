import React from 'react';
import { Button, Carousel, Input } from 'antd'; //引入
import OnlineApi from './../../api/api.js'
import store from './../../store'
import './index.less'
import { getValueChange,getAddChange,getDeleteChange } from './../../store/actionCreators'
class Talentservice extends React.Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.inputValueChange = this.inputValueChange.bind(this);
		this.storeChange = this.storeChange.bind(this);
		store.subscribe(this.storeChange)
		this.addData = this.addData.bind(this);
		this.deleteData = this.deleteData.bind(this)
	}
	//store中数据发生改变之后
	storeChange(){
		this.setState(store.getState())
	}
	inputValueChange(e) {
		const action = getValueChange(e.target.value)
		store.dispatch(action)
	}
	addData(){
		const action = getAddChange()
		store.dispatch(action)
	}
	deleteData(index){
		
		const action = getDeleteChange(index)
		store.dispatch(action)
	}
	render() {
		let list = this.state.list;
		return(
			<div className="talentService">
				<div style={{padding:'10px'}}>
					<Input value={this.state.inputValue} style={{width:'300px'}} onChange={this.inputValueChange}/>
					<Button type = "primary" style={{marginLeft:'10px'}} onClick={this.addData}>提交</Button>
				</div>
				<div className="list">
					{list.map((item,index) => {
						return (
								<div key={index} onClick={this.deleteData.bind(this,index)}>
									{item}
								</div>
								)
					})}
				</div>
				
			</div>
		)
	}
}
export default Talentservice;
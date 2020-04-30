import React from 'react';
import OnlineApi from './../../api/api.js'
import store from './../../store'
import './index.less'
import { getValueChange,getAddChange,getDeleteChange } from './../../store/actionCreators'
import IndexUi from './indexUi'
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
		
		return (<IndexUi list={this.state.list}
				inputValue={this.state.inputValue}
				inputValueChange={this.inputValueChange}
				deleteData={this.deleteData}
				addData={this.addData}
			/>)
		
	}
}
export default Talentservice;
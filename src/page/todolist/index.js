import React from 'react'
import IndexUi from './indexui';
import { connect } from 'react-redux';
import { INPUT_VALUE_CHAGE,INPUT_ADD_CHAGE,INPUT_DELETE_CHAGE } from './../../store/actiontypes.js'
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'tolist哈哈哈'
		}
	}
	render() {
		
		return <IndexUi inputValue={this.props.inputValue} 
		list={this.props.list} 
		inputValueChange={this.props.inputValueChange} 
		addData={this.props.addData}
		deleteData={this.props.deleteData}
		name={this.state.name}/>
	}

}
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		inputValueChange(e) {
			
			const action = {
				type: INPUT_VALUE_CHAGE,
				value: e.target.value
			}
			dispatch(action)
		},
		addData(){
			const action = {
				type:INPUT_ADD_CHAGE
			}
			dispatch(action)
		},
		deleteData(index){
			const action = {
				type: INPUT_DELETE_CHAGE,
				value: index
			}
			dispatch(action)
		}
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
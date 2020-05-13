import { INPUT_VALUE_CHAGE, INPUT_ADD_CHAGE, INPUT_DELETE_CHAGE } from './actionTypes'
const defaultState = {
	inputValue:'张张',
	list:[1,2,3,4]
}
export default (state = defaultState,action) => {
	if(action.type === INPUT_VALUE_CHAGE){
		let newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;//固定写法，返回一个新的值给store，用新的newStore替换本身store仓库里的数据
	}
	if(action.type === INPUT_ADD_CHAGE){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if(action.type === INPUT_DELETE_CHAGE){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	}
	return state;
}

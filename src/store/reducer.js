import { INPUT_VALUE_CHAGE,INPUT_ADD_CHAGE,INPUT_DELETE_CHAGE } from './actiontypes.js'
const defaultState = {
	inputValue:'',
	list:[]
}
//reducer 是一个纯函数
export default (state = defaultState,action) => {
	if(action.type === INPUT_VALUE_CHAGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if(action.type === INPUT_ADD_CHAGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = ''
		return newState;
	}
	if(action.type === INPUT_DELETE_CHAGE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.value,1);
		
		return newState;
	}
	return state;//默认返回初始状态state
}

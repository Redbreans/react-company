import { INPUT_VALUE_CHAGE, INPUT_ADD_CHAGE, INPUT_DELETE_CHAGE } from './actionTypes'
export const getValueChange = (value) => ({
	type: INPUT_VALUE_CHAGE,
	value
})
export const getAddChange = () => ({
	type: INPUT_ADD_CHAGE
	
})
export const getDeleteChange = (index) => ({
	type: INPUT_DELETE_CHAGE,
	index
})
import React from 'react';
import { Button, Input } from 'antd'; //引入
import './index.less'
const Todolist = (props) => {
	
	let inputValue = props.inputValue;
	let list = props.list || [];
	return (
		<div className="todoList"> 
			<div>
				<Input value={inputValue} style={{width:'300px'}} onChange={props.inputValueChange}></Input>
				<Button onClick={props.addData}>提交</Button>
				<h1>{props.name}</h1>
			</div>
			<div>
				{list.map((item,index) => {
					return (<li key={index} onClick={() => props.deleteData(index)}>{item}</li>)
				})}
			</div>
		</div>
		
	)
}
export default Todolist
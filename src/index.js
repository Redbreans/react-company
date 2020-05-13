import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import creatHistory from 'history/createHashHistory'
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(
	//	<React.StrictMode>
	//  <App />
	//</React.StrictMode>,
	<Provider store = {store}>
		<App />
	</Provider>,
	
	document.getElementById('root')
);
React.$goBack = function() {
	
//	const history = creatHistory();
//	history.goBack();
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
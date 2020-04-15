import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page404 from './page/404page/index';
import { routes } from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

function App() {
	console.log("routes0", routes)
console.log(renderRoutes(routes),1234)
	return(
		<div className="App">
			<BrowserRouter>
		        {renderRoutes(routes)}
		    </BrowserRouter>
	    
    	</div>
	);
}

export default App;
import React from 'react';

class Home extends React.Component {
	constructor(props){
		super(props);
	}
	render(){ 
		return(
			<div style={{width:'100%',height:'100vh',textAlign:'center',lineHeight:'100vh'}}>
				<img alt="" src="../img/general_image_404.png" />
			</div>
		)
	}
}
export default Home;
import React from 'react';
import '../../styles/App/App.css';
import logo from '../../logo.png';

const Logotipo = () => {
	return(
		<div className="logo-container">
			<img src={logo} className="App-logo" alt="logo" />
		</div>
	);
}

export default Logotipo;
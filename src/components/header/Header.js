import React, { Component } from 'react';
import '../../styles/App/App.css';
import Logotipo from './Logotipo';
import Titulo from './Titulo';

class Header extends Component {
	render(){
		return(
			<div className="header-container">
				<Logotipo />
				<Titulo />
			</div>
		);
	}
}

export default Header;
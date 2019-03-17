//Dependencies
import React, { Component } from 'react';
//CSS
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/home/navbar/Navbar.css';
//Components
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import BurgerMenu from './navbar-mobile/BurgerMenu';

class Navbar extends Component {
	Clickeado = () => {
		const boton = document.querySelectorAll('li')
		console.log(boton)
	}

	render(){
		if (isWidthUp('md', this.props.width)) {
			return (
				<div className="nav-position">
					<div className="nav-cont">
						<nav className="menu">
							<ul onClick={this.Clickeado} className="lista">
							{
								this.props.enlaces.map((enlace, index) =>{
									return(
										<li key={index}><p>{enlace}</p></li>
									)
								})
							}
							</ul>
						</nav>
					</div>
				</div>
			);
		}

		return(
			<div className="Mobile">
				<BurgerMenu />
			</div>
		);
	}
}

export default withWidth()(Navbar);

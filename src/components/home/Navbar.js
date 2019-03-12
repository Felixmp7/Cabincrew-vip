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
								<li className="Home"><p>Home</p></li>
								<li><p>Nosotros</p></li>
								<li><p>Equipo</p></li>
								<li><p>Servicios</p></li>
								<li><p>Galeria</p></li>
								<li><p>Promociones</p></li>
								<li><p>Contacto</p></li>
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

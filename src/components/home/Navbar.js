//Dependencies
import React, { Component } from 'react';
//CSS
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/home/navbar/Navbar.css';

class Navbar extends Component {

	/*Activo = () =>{
		const Button = document.querySelector('.Home');
		const posicionScroll = window.scrollY;
		if (posicionScroll) {
			Button.style.backgroundColor = 'rgba(122, 22, 22, .2)';
		}
	}*/

	Clickeado = () => {
		const boton = document.querySelectorAll('li')
		console.log(boton)
	}

	render(){
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
}

export default Navbar;
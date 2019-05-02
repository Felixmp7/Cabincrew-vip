//Dependencies
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
//CSS
import 'materialize-css/dist/css/materialize.min.css'
import '../../styles/navbar/Navbar.css'
//Components
import BurgerMenu from './navbar-mobile/BurgerMenu'

class Navbar extends Component {
	setRef = element => {
		let clase = element.className
		if (clase === 'menu') {
			this.menu = element
			console.log(clase)
		}

		if (clase === 'nav-cont') {
			this.nav = element
			console.log(clase)
		}
	}
	setBackgroundColor = event =>{
		this.menu.classList.add('background-dynamic')
		this.nav.classList.add('border-dynamic')
	}

	setNormalBackgroundColor = event =>{
		this.menu.classList.remove('background-dynamic')
		this.nav.classList.remove('border-dynamic')
	}
	render(){
		if (isWidthUp('md', this.props.width)) {
			return (
				<div className="nav-position">
					<div className="nav-cont" ref={this.setRef}>
						<nav className="menu" ref={this.setRef}>
							<ul className="lista">
							<Link
								to="/"
								onClick={this.setNormalBackgroundColor}
							>Home
							</Link>
							<Link
								to="/nosotros"
								onClick={this.setBackgroundColor}
							>Nosotros
							</Link>
							<Link
								to="/servicios"
								onClick={this.setNormalBackgroundColor}
							>Servicios
							</Link>
							<Link
								to="/galeria"
								onClick={this.setNormalBackgroundColor}
							>Galeria
							</Link>
							<Link
								to="/contacto"
								onClick={this.setBackgroundColor}
							>Contacto
							</Link>
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

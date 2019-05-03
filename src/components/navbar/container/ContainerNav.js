//Dependencies
import React, { Component } from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
//CSS
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'
//Components
import Navbar from '../components/Navbar'
import BurgerMenu from '../components/BurgerMenu'

class ContainerNav extends Component {
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
				<Navbar
					setRef={this.setRef}
					setBackgroundColor={this.setBackgroundColor}
					setNormalBackgroundColor={this.setNormalBackgroundColor}
				/>
			);
		}

		return(
			<div className="Mobile">
				<BurgerMenu />
			</div>
		);
	}
}

export default withWidth()(ContainerNav);

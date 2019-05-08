//Dependencies
import React, { Component } from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
//CSS
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'
//Components
import Navbar from '../components/Navbar'
import BurgerMenu from '../components/BurgerMenu'

const alto = window.innerWidth
const ancho = window.innerHeight

class ContainerNav extends Component {
	setRefMenu = element => {
		if (alto >= 993 || ancho >= 993) {
			// console.log(element.classList);
			// var clase = element.classList.value
				this.menu = element
		}
	}

	setRefNav = element => {
		if (alto >= 993 || ancho >= 993) {
			// console.log(element.classList);
			// var clase = element.classList.value
				this.nav = element
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
					setRefMenu={this.setRefMenu}
					setRefNav={this.setRefNav}
					setBackgroundColor={this.setBackgroundColor}
					setNormalBackgroundColor={this.setNormalBackgroundColor}
				/>
			);
		}

		return(
			<BurgerMenu />
		);
	}
}

export default withWidth()(ContainerNav);

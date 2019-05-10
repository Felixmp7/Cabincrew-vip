//Dependencies
import React, { Component } from 'react'
//CSS
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'
//Components
import Navbar from '../components/Navbar'

const alto = window.innerWidth
const ancho = window.innerHeight

class ContainerNav extends Component {
	setRefMenu = element => {
		if (alto >= 993 || ancho >= 993) {
				this.menu = element
		}
	}

	setRefNav = element => {
		if (alto >= 993 || ancho >= 993) {
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
			return (
				<Navbar
					setRefMenu={this.setRefMenu}
					setRefNav={this.setRefNav}
					setBackgroundColor={this.setBackgroundColor}
					setNormalBackgroundColor={this.setNormalBackgroundColor}
				/>
			);
		}
}

export default ContainerNav

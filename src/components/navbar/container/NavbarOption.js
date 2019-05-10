//Dependencies
import React, { Component } from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
//CSS
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'
//Components
import Navbar from './Navbar'
import BurgerMenu from '../components/BurgerMenu'

class NavbarOption extends Component {
	render(){
		if (isWidthUp('md', this.props.width)) {
			return (
				<Navbar/>
			);
		}

		return(
			<BurgerMenu />
		);
	}
}

export default withWidth()(NavbarOption);

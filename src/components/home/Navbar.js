//Dependencies
import React, { Component } from 'react';
//CSS
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/home/navbar/Navbar.css';
//Components
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import BurgerMenu from './navbar-mobile/BurgerMenu';

class Navbar extends Component {
	render(){
		if (isWidthUp('md', this.props.width)) {
			return (
				<div className="nav-position">
					<div className="nav-cont">
						<nav className="menu">
							<ul className="lista">
							{
								this.props.enlaces.map((enlace, index) =>{
									return(
										<li key={index}>{enlace}</li>
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

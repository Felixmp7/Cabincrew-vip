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
	render(){
		if (isWidthUp('md', this.props.width)) {
			return (
				<div className="nav-position">
					<div className="nav-cont">
						<nav className="menu">
							<ul className="lista">
							{
								this.props.enlaces.map((enlace, index) =>{
									if (index === 0) {
										return(
											<Link
												to="/"
												key={index}
												>{enlace}</Link>
											)
									}
									else {
										return(
											<Link
												to={`/${enlace.toLowerCase()}`}
												key={index}
												>{enlace}</Link>
											)
									}
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

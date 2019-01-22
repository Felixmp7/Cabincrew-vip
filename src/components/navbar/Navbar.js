import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav-wrapper black lighten">
			<div className="container">
				<ul className="center">
					<li><a>Home</a></li>
					<li><a>About Us</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
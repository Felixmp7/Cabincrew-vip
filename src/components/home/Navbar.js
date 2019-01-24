//Dependencies
import React from 'react';
//CSS
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/home/navbar/Navbar.css';

const Navbar = () => {
	return (
		<div className="nav-position">
			<div className="nav-cont">
				<nav className="menu">
					<ul className="lista">
						<li><a>Home</a></li>
						<li><a>Nosotros</a></li>
						<li><a>Equipo</a></li>
						<li><a>Servicios</a></li>
						<li><a>Galeria</a></li>
						<li><a>Promociones</a></li>
						<li><a>Contacto</a></li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
export default Navbar;
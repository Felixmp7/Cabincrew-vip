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
						<li><p>Home</p></li>
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
export default Navbar;
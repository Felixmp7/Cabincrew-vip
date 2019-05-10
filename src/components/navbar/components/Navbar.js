import React from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'

const Navbar = props => {
  return (
    <div className="nav-position">
      <div className="nav-cont" ref={props.setRefNav}>
        <nav className="menu" ref={props.setRefMenu}>
          <ul className="lista">
            <Link to="/" onClick={props.setNormalBackgroundColor}>Home</Link>
            <Link to="/nosotros" onClick={props.setBackgroundColor}>Nosotros</Link>
            <Link to="/servicios" onClick={props.setNormalBackgroundColor}>Servicios</Link>
            <Link to="/galeria" onClick={props.setNormalBackgroundColor}>Galeria</Link>
            <Link to="/contacto" onClick={props.setBackgroundColor}>Contacto</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar

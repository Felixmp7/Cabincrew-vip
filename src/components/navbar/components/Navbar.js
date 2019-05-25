import React from 'react'
import {NavLink} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import '../../../styles/navbar/Navbar.css'

const Navbar = props => {
  return (
    <div className="nav-position">
      <div className="nav-cont" ref={props.setRefNav}>
        <nav className="menu" ref={props.setRefMenu}>
          <ul className="lista">
            <NavLink
              exact to="/"
              onClick={props.setNormalBackgroundColor}
              activeClassName="isActive"
              >Home
            </NavLink>
            <NavLink
              to="/nosotros"
              onClick={props.setBackgroundColor}
              activeClassName="isActive"
              >Nosotros
            </NavLink>
            <NavLink
              to="/servicios"
              onClick={props.setNormalBackgroundColor}
              activeClassName="isActive"
              >Servicios
            </NavLink>
            <NavLink
              to="/galeria"
              onClick={props.setNormalBackgroundColor}
              activeClassName="isActive"
              >Galeria
            </NavLink>
            <NavLink
              to="/contacto"
              onClick={props.setBackgroundColor}
              activeClassName="isActive"
              >Contacto
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar

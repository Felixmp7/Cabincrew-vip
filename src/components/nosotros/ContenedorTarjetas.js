//Dependencies
import React, { Component } from 'react'
//Components
import Tarjetas from './Tarjetas'
//CSS
import './../../styles/nosotros/Nosotros.css'

class ContenedorTarjetas extends Component {
	render() {
		return (
			<div className="cont-nosotros">
				<div className="cont-columnas">
					<Tarjetas/>
				</div>
			</div>
		);
	}
}

export default ContenedorTarjetas;

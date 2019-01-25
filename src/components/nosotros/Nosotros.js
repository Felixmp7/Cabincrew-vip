import React, { Component } from 'react';
import TreeColumnGridNosotros from './TreeColumnGridNosotros';
import './../../styles/nosotros/Nosotros.css';

class Nosotros extends Component {
	render() {
		return (
			<div className="cont-nosotros">
				<div className="cont-titulo">
					<h3 className="titulo">Nosotros</h3>
				</div>
				<div className="cont-columnas">
					<TreeColumnGridNosotros />
				</div>
			</div>
		);
	}
}

export default Nosotros;



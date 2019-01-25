import React, { Component } from 'react';
import Mision from './Mision';
//import TreeColumnGridNosotros from './TreeColumnGridNosotros';
import './../../styles/nosotros/Nosotros.css';

class Nosotros extends Component {
	render() {
		return (
			<div className="cont-nosotros">
				<Mision />
				{/*<TreeColumnGridNosotros />*/}
			</div>
		);
	}
}

export default Nosotros;



//Dependencies
import React, { Component } from 'react'
//Components
import GridNosotros from './GridNosotros'
//CSS
import './../../styles/nosotros/Nosotros.css'

class Nosotros extends Component {
	render() {
		return (
			<div className="cont-nosotros">
				<div className="cont-columnas">
					<GridNosotros/>
				</div>
			</div>
		);
	}
}

export default Nosotros;

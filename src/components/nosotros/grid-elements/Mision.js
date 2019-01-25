import React from 'react';
import success from '../../../media/iconos/success.png';
import './../../../styles/nosotros/mision/Mision.css'

const Mision = () => {
	return (
		<div className="cont">
			<div className="card tarjeta">
				<div className="card-image waves-effect waves-block waves-light cont-image">
					<img className="activator" src={success} alt="Success"/>
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">Mision<i className="material-icons right">more_vert</i></span>
				</div>
				<div className="card-reveal">
					<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
					<p>Here is some more information about this product that is only revealed once clicked on.</p>
				</div>
			</div>
		</div>
	);
}

export default Mision;
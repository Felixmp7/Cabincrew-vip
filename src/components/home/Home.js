import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import GetStartedButton from './GetStartedButton';
import './../../styles/home/Home.css';

const enlaces = [
	'Home',
	'Nosotros',
	'Equipo',
	'Servicios',
	'Galeria',
	'Promociones',
	'Contacto',
]


const Home = () => {
	return (
		<div className="cont-home">
			<Navbar enlaces={enlaces} />
			<Title />
			<GetStartedButton/>
		</div>
	);
}

export default Home;

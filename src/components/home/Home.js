//Dependencies
import React from 'react'
//Components
import Navbar from './Navbar'
import Title from './Title'
import GetStartedButton from './GetStartedButton'
//CSS
import './../../styles/home/Home.css'

const enlaces = [
	'Home',
	'Nosotros',
	'Servicios',
	'Galeria',
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

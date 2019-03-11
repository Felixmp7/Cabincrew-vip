import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import GetStartedButton from './GetStartedButton';
import './../../styles/home/Home.css';

const Home = () => {
	return (
		<div className="cont-home">
			<Navbar />
			<Title />
			<GetStartedButton/>
		</div>
	);
}

export default Home;

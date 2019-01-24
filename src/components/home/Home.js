import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import './../../styles/home/Home.css';

const Home = () => {
	return (
		<div className="cont-home">
			<Navbar />
			<Title />
			<div className="cont-button">
				<button className="get-started">Get Started</button>
			</div>
		</div>
	);
}

export default Home;
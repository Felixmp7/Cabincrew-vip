//Dependencies
import React from 'react'
//Components
import Title from './Title'
import GetStartedButton from './GetStartedButton'
//CSS
import '../../styles/home/Home.css'

const Header = () => {
	return (
		<div className="cont-home">
			<Title />
			<GetStartedButton/>
		</div>
	);
}

export default Header;

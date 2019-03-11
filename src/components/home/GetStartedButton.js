import React from 'react';
import './../../styles/home/GetStarted/Button.css'

const GetStartedButton = () => {
	return (
		<div className="position-button">
			<div className="cont-button">
				<button className="get-started">Get Started</button>
			</div>
		</div>
	);
}

export default GetStartedButton;

// .cont-button
// height: 50px
// .get-started
// 	width: 100%
// 	height: 100%
// 	background-color: rgba(255,255,255,0)
// 	border: 2px solid #5E0F15
// 	border-radius: 3px
// 	cursor: pointer
// 	color: #5E0F15
// 	font-size: 18px
// 	transition: all .6s ease
// 	&:hover
// 		background-color: rgba(94, 15, 21, 1)
// 		color: white
// 		transition: all .6s ease

// Dependencies
import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
//CSS
import './../../styles/home/GetStarted/Button.css'

const scrollType = {
	duration: 1000,
	delay: 50,
	smooth: true, // linear “easeInQuint” “easeOutCubic”
	offset: -10,
}

class GetStartedButton extends React.Component {
	getStartedScroll = e => {
		scroll.scrollTo(772, scrollType)
	}
	render(){
		return (
			<div className="position-bottom-button">
				<div className="cont-button">
					<button
						onClick={this.getStartedScroll}
						className="get-started"
						>
							Get Started
						</button>
					</div>
				</div>
			);
	}
}

export default GetStartedButton;

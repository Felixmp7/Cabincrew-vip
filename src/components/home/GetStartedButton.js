// Dependencies
import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
//CSS
import './../../styles/home/GetStarted/Button.css'

class GetStartedButton extends React.Component {
	getStartedScroll = e => {
		scroll.scrollTo(772)
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

import React, { PropTypes } from 'react';

class Modal extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}
	handleClick() {
	}
    render() {
        return (
        	<div className="modal-container">
	        	<div className="modal-backdrop">
	        		<div className="modal-background">
				      <h3>Thanks for signing up!</h3>
				      <h4>We’re just putting the finishing touches on Build React Native - we’ll let you know when it’s ready.</h4>
				      <p>Tell your friends:</p>
				      <div className="icon-row">
    					<img className="twitter-icon" src="i../../assets/images/twitter.png" />
						<img className="facebook-icon" src="i../../assets/images/facebook.png" />
				      </div>
				      <a href="#" className="btn btn-lg btn-default">close</a>
	        		</div>
	        	</div>
        	</div>
        )
    }
}
export default Modal;
import React, { PropTypes } from 'react';

class Homepage extends React.Component {
    render() {
        return (
        	<div className="homepage-hero">
	        	<img className="iphone-landing hidden-xs-down" src="../../assets/images/iphone-landing.png" />
    			<img className="nexus-landing hidden-xs-down" src="i../../assets/images/nexus-landing.png" />
	        	<div className="container homepage-container">
	        		<div className="row hero-cta text-center">
	        			<div className="col-sm-6 col-sm-offset-3">
		        			<h1 id="homepage-h1">The React Native guide<br></br> you've been waiting for.</h1>
		        			<h2 id="homepage-h2"><i>Build React Native</i> teaches you to create incredible native iOS and Android apps.</h2>
	        			</div>
	        		</div>
	            	<div className="signup-form row">
	            		<div className="col-md-4 col-md-offset-4">
	        			<p>Get early access:</p>
			            	<div className="form-group">
				            	<input placeholder="Email" className="input input-lg form-control" />
				            	<a href="#" className="btn btn-lg btn-block btn-primary hvr-hollow">sign up</a>
			        		</div>
		        		</div>
	        		</div>
	        	</div>
        	</div>
        )
    }
}
export default Homepage;
import React, { Component } from 'react';
import errorMessages from './ErrorMessages';

class ErrorHandler extends Component {
	render() {

		var className = "error-message";
		var errorMessage = "";

		// Negative error number implies no error.
		if (this.props.errorMessageNumber > -1) {
			
			className = "error-message show";
			try {
				//Array index given is out-of-bounds.
				errorMessage = errorMessages[this.props.errorMessageNumber];

			} catch(err) {
				className = "error-message";
				errorMessage="";
			}
		}

		return (
			<div className={className}>
				<p>
					{errorMessage}
				</p>
			</div>
		);
	}
}

export default ErrorHandler;

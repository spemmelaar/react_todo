import React, { Component } from 'react';
import buildOptionsDict from './BuildOptionsDict';

class FormOptions extends Component {
	render() {
		var rows = [];
		var todoStates = buildOptionsDict(this.props.modify);

 		todoStates.forEach(
			function(todoState) {
				var todoKey = Object.keys(todoState)[0]
				var todoValue = todoState[todoKey];
				rows.push(<option value={todoKey} key={todoKey} >{todoValue}</option>);	
			}
		);
		return (
             <select value={this.props.currentStatus} onChange={this.props.onChange} >
             	{rows}
            </select> 
		);
	}
}

export default FormOptions;
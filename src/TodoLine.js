import React, { Component } from 'react';
import FormOptions from './FormOptions';


class TodoLine extends Component {

	constructor(props) {
		super(props);
		this.handleFilterStatus = this.handleFilterStatus.bind(this);
		
	}


	handleFilterStatus(event) {
		var newStatus = event.target.value;
		//Pass index, todoText and newStatus for update.
		this.props.updateTodoHandler(
			this.props.todoIndex,
			this.props.todoText,
			newStatus
		);
	}

	render() {
		var modifyValue = true;
		return (
			<tr>
				<td className="left">
					{this.props.todoText}
				</td>
				<td className="right">
					<form>
	          			<FormOptions modify={modifyValue} currentStatus={this.props.todoStatus} onChange={this.handleFilterStatus} />
	          		</form>
		        </td>
		    </tr>
		);
	}
}

export default TodoLine;
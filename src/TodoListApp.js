import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import buildOptionsDict from './BuildOptionsDict';
import FilteredOutputTable from './FilteredOutputTable';
import OutputFilterForm from './OutputFilterForm';

class TodoListApp extends Component {

	constructor(props) {
		super(props);

		this.state = {

			todoList: [],
			currentTodoText: '',
			currentFilterStatus: 'all',
			errorMessageNumber: -1
		}

		this.handleTodoTextInput = this.handleTodoTextInput.bind(this);
		this.handleTodoTextSubmit = this.handleTodoTextSubmit.bind(this);
		this.handleUpdateTodoStatus = this.handleUpdateTodoStatus.bind(this);
		this.handleFilterTodoStatus = this.handleFilterTodoStatus.bind(this);
		this.setErrorMessageNumber = this.setErrorMessageNumber.bind(this);
	}

	// ====================
	// AddTodoForm handlers
	// ====================
	handleTodoTextInput(todoText) {
		this.setState({ currentTodoText: todoText });
	}

	handleTodoTextSubmit() {

		var currentTodoList = this.state.todoList;
		var newTodo = {text: this.state.currentTodoText, status: 'pending', index: currentTodoList.length };

		//Error check - should not be submitting empty todo
		if (this.state.currentTodoText === "") {
			this.setErrorMessageNumber(0);
			this.handleTodoTextInput(this.state.currentTodoText);
			return;	
		} 
		
		//Small app so ok to process synchronously. Error check - see if todo already exists.
		for (var index in this.state.todoList) {

			if ( this.state.todoList[index]['text'] === this.state.currentTodoText) {
				this.setErrorMessageNumber(1);
				this.handleTodoTextInput(this.state.currentTodoText);
				return;
			}
		}


		//Valid submission
		currentTodoList.push(newTodo);
		this.setState({ todoList: currentTodoList, currentTodoText: ''});
		this.setErrorMessageNumber(-1);
	}

	// =========================
	// FilterOutputForm Handlers
	// =========================
	handleFilterTodoStatus(todoStatus) {
		this.setState( {currentFilterStatus : todoStatus} );
	}

	// ============================
	// FilteredOutputTable Handlers
	// ============================

	//TODO - investigate better partial update technique!
	handleUpdateTodoStatus(todoIndex, todoText, newStatus) {
		var theTodoList = this.state.todoList;	

		var todoStates = buildOptionsDict(true);
		var validSubmission = false;
		//Check if someone goes in to the html and tries to submit a todo with a status that's not allowed.
 		todoStates.forEach(
			function(todoState) {
				var todoKey = Object.keys(todoState)[0];

				if (todoKey === newStatus) {
					validSubmission = true;
				}
			}	
		);

		theTodoList[todoIndex].currentTodoText =todoText;

 		if (validSubmission === false) {
 			//reset todo status to pending by default, since the user is submitting something that's not allowed.
 			theTodoList[todoIndex].status = 'pending';
 			this.setErrorMessageNumber(2);
 		} else {
 			this.setErrorMessageNumber(-1);
 			theTodoList[todoIndex].status = newStatus;
 		}

		

		this.setState(
			{ todoList: theTodoList}
		);
	}

	setErrorMessageNumber(errorMessage) {
		this.setState({errorMessageNumber: errorMessage});
	}

	render() {
		var name="container";

		if(this.state.todoList.length > 0) {
			name = "container show";
		}

		return (
			<div className="outer-container">
				<h1 className="header-text" > Shane's Little 'To-Do' App</h1>
				<AddTodoForm errorMessageNumber={this.state.errorMessageNumber} onTodoTextChange={this.handleTodoTextInput} onTodoTextSubmit={this.handleTodoTextSubmit} inputText={this.state.currentTodoText} />
				<div className={name} id="results-container">
					<h1 className="results-text" >To-Do List</h1>
					<OutputFilterForm onTodoSelectChange={this.handleFilterTodoStatus} currentStatus={this.state.currentFilterStatus} inputText={this.state.currentTodoText} />
					<FilteredOutputTable handleUpdateTodoStatus={this.handleUpdateTodoStatus} currentStatus={this.state.currentFilterStatus} todoList={this.state.todoList} />
				</div>
			</div>
		);
	}
}

export default TodoListApp;
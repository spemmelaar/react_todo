import React, { Component } from 'react';
import TodoLine from './TodoLine';

class ShowAllTodos extends Component {

  render() {
  	var rows = [];
  	this.props.todoList.forEach(
	    function(todo) {
	      rows.push( <TodoLine todoText={todo.text} todoStatus={todo.status} updateTodoHandler={this.props.handleUpdateTodoStatus} todoIndex={todo.index} key={todo.index} />);
	    }
  );
  	return (<div>{rows}</div>);
  }
}

export default ShowAllTodos;
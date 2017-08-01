import React, { Component } from 'react';
import TodoLine from './TodoLine';

function  ShowAllTodos(props) {
  var rows = [];
  props.todoList.forEach(
    function(todo) {
      rows.push( <TodoLine todoText={todo.text} todoStatus={todo.status} updateTodoHandler={props.handleUpdateTodoStatus} todoIndex={todo.index} key={todo.index} />);
    }
  );

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

function FilterTodos(props) {

  var rows = [];

  rows = props.todoList.filter(
    function(todo) {
      return todo.status === props.currentStatus;
    }
  ).map(
    function(todo) {
      return <TodoLine todoText={todo.text} todoStatus={todo.status} updateTodoHandler={props.handleUpdateTodoStatus} todoIndex={todo.index} key={todo.index} />;
    }
  );

  return (
    <tbody>
      {rows}
    </tbody>
  );

}

class FilteredOutputTable extends Component {

  render() {
    var todoLines = null;

    if(this.props.currentStatus === 'all') {
      todoLines = <ShowAllTodos todoList={this.props.todoList} handleUpdateTodoStatus={this.props.handleUpdateTodoStatus} />;
    }
    else {
      todoLines = <FilterTodos todoList={this.props.todoList} handleUpdateTodoStatus={this.props.handleUpdateTodoStatus} currentStatus={this.props.currentStatus} />;
    }

  	return(
      <div className="results-section">
    		<table className="output-table" >
          <thead>
            <tr>
              <th className="todo-description" >To-Do Text</th><th className="change-status" >Update Status</th>
            </tr>
          </thead>
            {todoLines}
  	  	</table>
      </div>
	 );

  }
}

export default FilteredOutputTable;
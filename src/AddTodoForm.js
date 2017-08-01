import React, { Component } from 'react';
import ErrorHandler from './ErrorHandler';

class AddTodoForm extends Component {

  constructor(props) {
    super(props);
  
    this.handleInputTextType = this.handleInputTextType.bind(this);
    this.handleInputTextSubmit = this.handleInputTextSubmit.bind(this);
    this.updateFormSubmissionState = this.updateFormSubmissionState.bind(this);

  }

  updateFormSubmissionState(newState) {
    this.setState({ submitted: newState});
  }

  handleInputTextType(event) {
    this.props.onTodoTextChange(event.target.value);
  }

  handleInputTextSubmit(event) {
    event.preventDefault();
    this.props.onTodoTextSubmit();
  }

  render() {

    return (
      <div className="container">
        <ErrorHandler errorMessageNumber={this.props.errorMessageNumber} />
        <form onSubmit={this.handleInputTextSubmit} >
          <input type='text'
            id='todo-input'
            value={this.props.inputText}
            placeholder="Enter 'To-Do' text ..."
            className='todo-input'
            onChange={this.handleInputTextType} 
          />
          <input type='submit'
            id='todo-submit'
            className='todo-submit'
            value="Add a new To-Do"
          />
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
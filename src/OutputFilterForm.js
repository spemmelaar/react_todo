import React, { Component } from 'react';
import FormOptions from './FormOptions';

class OutputFilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleFilterStatus = this.handleFilterStatus.bind(this);
  }

  handleFilterStatus(event) {
    this.props.onTodoSelectChange(event.target.value);
  }

  render() {
    var modifyValue = false;

    return (
      <div className="filter-container" >
        <div className="row-filter-label">
          <p className="label">Filter by status:</p>
        </div>
        <div className="row-filter-select">
          <form>
            <FormOptions modify={modifyValue} currentStatus={this.props.currentStatus} onChange={this.handleFilterStatus} />
          </form>
        </div>
      </div>
    );
  }
}

export default OutputFilterForm;

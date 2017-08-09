import { uniqueId } from '../../util/id_generator';
import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      task_id: this.props.task_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="step-form" onSubmit={ this.handleSubmit }>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="walk to store"
            onChange={ this.update('title') }
            required /> 
        </label>
      </form>
    )
  }
}

import React from 'react';
import { uniqueID } from '../../util/id_generator';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state, { id: uniqueID() });
    this.props.receiveTask(task);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Do it"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="Think about it"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Task</button>
      </form>
    );
  }
};

export default TaskForm;

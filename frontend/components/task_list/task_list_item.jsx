import React from 'react';
import merge from 'lodash/merge';
import TaskDetailViewContainer from './task_detail_view_container';

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleTask(e) {
    e.preventDefault();
    const toggledTask = merge(
      {},
      this.props.task,
      { done: !this.props.task.done }
    );

    this.props.receiveTask(toggledTask);
  }

  render() {
    const { task, updateTask } = this.props;
    const { title, done } = task;
    let detail;
    if (this.state.detail) {
      detail = <TaskDetailViewContainer task={ task } />;
    }


    return (
      <li className="task-list-item">
        <div className="task-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <button
            className={ done ? "done" : "undone"}
            onClick={ this.toggleTask }>
            { done ? "Undo" : "Done"}
          </button>
        </div>
        { detail }
      </li>
    );
  }
}

export default TaskListItem;

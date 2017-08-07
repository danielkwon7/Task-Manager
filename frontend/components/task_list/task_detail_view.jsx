import React from 'react';

class TaskDetailView extends React.Component {
  render() {
    const { task, removeTask } = this.props;
    return(
      <div>
        <p className="task-body">{ task.body }</p>
        <button
          className="delete-button"
          onClick={ removeTask }>Delete Task</button>
      </div>
    );
  }
}

export default TaskDetailView;

import React from 'react';

class TaskList extends React.Component {
  render() {
    const {tasks}  = this.props;
    const taskItems = tasks.map(task => <h1 key={task.id}>{task.title}</h1>);

    return(
      <div>
        <ul className="task-list">
          { taskItems }
        </ul>
      </div>
    );
  }
}

export default TaskList;

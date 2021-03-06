import React from 'react';
import TaskListItem from './task_list_item';
import TaskForm from './task_form';


class TaskList extends React.Component {
  render() {
    const {tasks, receiveTask }  = this.props;
    const taskItems = tasks.map(task =>
      <TaskListItem
        key={`task-list-item${task.id}`}
        task={task}
        receiveTask={ receiveTask } />
    );

    return(
      <div>
        <ul className="task-list">
          { taskItems }
        </ul>
        <TaskForm receiveTask={ receiveTask }/>
      </div>
    );
  }
}

export default TaskList;

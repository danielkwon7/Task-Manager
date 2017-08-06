import { connect } from 'react-redux';
import TaskList from './task_list';

import { receiveTasks, receiveTask } from '../../actions/task_actions';
import { allTasks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: allTasks(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTasks: () => dispatch(receiveTasks()),
  receiveTask: task => dispatch(receiveTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

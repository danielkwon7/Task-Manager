import { connect } from 'react-redux';
import TaskDetailView from './task_detail_view';
import { removeTask } from '../../actions/task_actions';

const mapDispatchToProps = (dispatch, { task }) => ({
  removeTask: () => dispatch(removeTask(task))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskDetailView);

import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTaskId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';

const mapStateToProps = (state, { task_id }) => ({
  steps: stepsByTaskId(state, task_id),
  task_id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

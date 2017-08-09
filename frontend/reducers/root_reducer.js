import { combineReducers } from 'redux';
import tasksReducer from './tasks_reducer';
import stepsReducer from './steps_reducer';

const RootReducer = combineReducers({
  tasks: tasksReducer,
  steps: stepsReducer
});

export default RootReducer;

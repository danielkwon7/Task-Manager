import { combineReducers } from 'redux';
import tasksReducer from './tasks_reducer';

const RootReducer = combineReducers({
  tasks: tasksReducer
});

export default RootReducer;

import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK, TASK_ERROR } from '../actions/task_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'Work on a/A projects',
    body: 'Review all materials learnt so far',
    done: false
  },

  2: {
    id: 2,
    title: 'Learn from mistakes',
    body: 'Acquire a resilient stance in facing obstacles',
    done: true
  },

  3: {
    id: 3,
    title: 'Make wise decisions',
    body: 'Every moment is a decision point',
    done: true
  }
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TASKS:
      const newState = {};
      action.tasks.forEach((task) => newState[task.id] = task);
      return newState;
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    default:
      return state;
  }
};

export default tasksReducer;

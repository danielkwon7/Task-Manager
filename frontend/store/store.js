import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {'tasks':'daniel'}) => {
  const store = createStore(RootReducer, preloadedState);
  return store;
}

export default configureStore;

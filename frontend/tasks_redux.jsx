import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTasks, receiveTask } from './actions/task_actions';

const newTasks = [
  {id: 3, title: "Google", body: "Become a software engineer at Google"},
  {id: 4, title: "Facebook", body: "Become a software engineer at Facebook"}
]

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.newTasks = newTasks;
  window.receiveTasks = receiveTasks;
  const root = document.getElementById('content');
  ReactDOM.render(<Root />, root);
})

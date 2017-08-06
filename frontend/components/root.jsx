import React from 'react';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
    <h1 className="header"></h1>
    <h2 className="sub-header"></h2>
    <h2 className="sub-sub-header"></h2>
  </Provider>
);

export default Root;

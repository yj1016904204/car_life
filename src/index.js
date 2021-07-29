import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import './assests/css/layout.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



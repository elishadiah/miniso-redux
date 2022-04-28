import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';
import { loginSuccess } from './redux/userRedux';

const token = localStorage.getItem('token');

if (token) {
  const user = jwtDecode(token);
  store.dispatch(loginSuccess(user));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

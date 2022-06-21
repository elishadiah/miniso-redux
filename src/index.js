import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';
import { loginSuccess } from './redux/userRedux';
import axios from 'axios';

const token = localStorage.getItem('token');

if (token) {
  const check = async () => {
    try {
      if (token) {
        const url = `http://3.16.73.177:9080/oauth/check_token?token=${token}`;
        await axios.get(url, {
          auth: {
            username: 'ReactMinisoApp',
            password: 'R3@l1z3m1n1z0',
          },
        });
      }
      const user = jwtDecode(token);
      store.dispatch(loginSuccess(user));
    } catch (error) {
      localStorage.removeItem('username');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  };
  check();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

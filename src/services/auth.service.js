import $ from 'jquery';
import axiosInstance from './axiosInstance';

const register = (
  userName,
  hashPass,
  names,
  lastName,
  email,
  nit,
  dui,
  phone,
  address
) => {
  return axiosInstance.post('/public/users/register', {
    // username,
    // email,|
    // password,
    userName,
    hashPass,
    names,
    lastName,
    email,
    nit,
    dui,
    phone,
    address,
  });
};

const login = async (username, password, cb) => {
  try {
    const grant_type = 'password';
    localStorage.setItem('username', username);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Credentials': 'true',
      },
      auth: {
        username: 'ReactMinisoApp',
        password: 'R3@l1z3m1n1z0',
      },
      withCredentials: true,
      crossDomain: true,
    };

    const response = await axiosInstance.post(
      '/oauth/token',
      //   "/api/oauth/token",
      $.param({
        username,
        password,
        grant_type,
      }),
      config
    );
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token', response.data.access_token);
    }
    cb(true, response.data);
  } catch (error) {
    cb(false, error);
  }
};

const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const getCurrentUsername = () => {
  return localStorage.getItem('username');
};
const data = { register, login, logout, getCurrentUser, getCurrentUsername };
export default data;

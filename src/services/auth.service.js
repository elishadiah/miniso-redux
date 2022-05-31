import axios from "axios";
import $ from "jquery";

const API_URL = `https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API`;

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
  return axios.post(API_URL + "/public/users/register", {
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
    const grant_type = "password";
    localStorage.setItem("username", username);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      auth: {
        username: "ReactMinisoApp",
        password: "R3@l1z3m1n1z0",
      },
      withCredentials: false,
      crossDomain: true,
    };

    const response = await axios.post(
      API_URL + "/oauth/token",
      //   "/api/oauth/token",
      $.param({
        username,
        password,
        grant_type,
      }),
      config
    );
    if (response.data.access_token) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.access_token);
    }
    cb(true, response.data);
  } catch (error) {
    cb(false, error);
  }
};

const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getCurrentUsername = () => {
  return localStorage.getItem("username");
};
const data = { register, login, logout, getCurrentUser, getCurrentUsername };
export default data;

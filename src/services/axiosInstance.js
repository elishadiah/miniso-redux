import axios from 'axios';

const token = localStorage.getItem('token');
const baseURL = 'https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API';
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('token');
  try {
    if (token) {
      const url = `https://2leucj6c3a.execute-api.us-east-2.amazonaws.com/API/oauth/check_token?token=${token}`;
      await axios.get(url, {
        auth: {
          username: 'ReactMinisoApp',
          password: 'R3@l1z3m1n1z0',
        },
      });
    }
    req.headers.Authorization = token ? `Bearer ${token}` : '';
    return req;
  } catch (error) {
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    req.headers.Authorization = '';
    return req;
  }
});

export default axiosInstance;

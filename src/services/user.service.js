import axiosInstance from '../services/axiosInstance';
import authHeader from './auth-header';

const API_URL = '/api/test/';

export const getPublicContent = () => {
  return axiosInstance.get(API_URL + 'all');
};

export const getUserBoard = () => {
  return axiosInstance.get(API_URL + 'username', { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axiosInstance.get(API_URL + 'mod', { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axiosInstance.get(API_URL + 'admin', { headers: authHeader() });
};

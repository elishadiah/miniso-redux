import axiosInstance from './services/axiosInstance';

const BASE_URL = '';
const TOKEN = '';

export const publicRequest = axiosInstance.create({
  baseURL: BASE_URL,
});

export const userRequest = axiosInstance.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

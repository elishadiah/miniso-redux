import axios from "axios";

const BASE_URL = "3.16.73.177:9080/";
const TOKEN = "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

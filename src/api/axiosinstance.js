import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.API_URL
  baseURL: "https://pkl-backend.vercel.app/api",
  timeout: 10000,
});

// axiosInstance.interceptors.request.use();

// axios.interceptors.response.use();

export default axiosInstance;

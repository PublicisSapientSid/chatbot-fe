import axios from "axios";

const baseURL = "http://localhost:4200";
const timeout = 10000;

const axiosInstance = axios.create({
  baseURL,
  timeout,
});

export default axiosInstance;

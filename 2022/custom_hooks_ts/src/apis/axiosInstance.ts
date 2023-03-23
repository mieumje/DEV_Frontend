import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

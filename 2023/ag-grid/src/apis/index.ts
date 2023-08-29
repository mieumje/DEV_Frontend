import axios from "axios";

const TEMP_BASE_URL = "http://localhost:4000/";

const axiosInstance = axios.create({
  baseURL: TEMP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getCardList = async (params?: { _start: number; _end: number }) => {
  const { data } = await axiosInstance({
    method: "GET",
    url: "list",
    params,
  });
  return data;
};

export { axiosInstance, getCardList };

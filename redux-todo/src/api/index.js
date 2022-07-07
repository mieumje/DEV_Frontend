import axios from "axios";

const API_END_POINT = "https://jsonplaceholder.typicode.com";

export const fetch = async (url, options) => {
  try {
    const result = await axios.get(`${API_END_POINT}${url}`, options);
    return result.data;
  } catch (e) {
    console.error(e.message);
    return e;
  }
};

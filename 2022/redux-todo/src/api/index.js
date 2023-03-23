import axios from "axios";

const API_END_POINT = "https://jsonplaceholder.typicode.com";

const fetch = async (url, options) => {
  try {
    const result = await axios.get(`${API_END_POINT}${url}`, options);
    return result.data;
  } catch (e) {
    console.error(e.message);
    return e;
  }
};

const PostAPI = async (url, options) => {
  try {
    console.log(options);
    const result = await axios.post(`${API_END_POINT}${url}`, options);
    return result.data;
  } catch (e) {
    console.error(e.message);
    return e;
  }
};

export { fetch, PostAPI };

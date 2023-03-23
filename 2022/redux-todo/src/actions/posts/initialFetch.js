import { fetchPosts } from "../../api/posts/fetchPosts";
import initFetch from "./initFetch";

const initialFetch = () => {
  return async (dispatch, getState) => {
    try {
      const data = await fetchPosts();
      dispatch(initFetch(data));
    } catch (e) {
      console.error(e.message);
    }
  };
};

export default initialFetch;

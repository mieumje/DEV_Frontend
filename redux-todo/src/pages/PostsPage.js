import { useEffect } from "react";
import { fetchPosts } from "../api/posts/fetchPosts";
import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initFetch } from "../actions/posts";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";

export default function PostsPage() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      dispatch(initFetch(data));
    };

    getPosts();
  }, [dispatch]);

  return (
    <>
      <Heading level={1} color={`${theme ? "white" : "#1a1a1a"}`}>
        Posts List
      </Heading>
      <Link to="/newPost">
        <button>글 쓰기</button>
      </Link>
      <PostsList theme={theme} />
    </>
  );
}

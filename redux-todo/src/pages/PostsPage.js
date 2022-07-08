import { useEffect } from "react";
import { fetchPosts } from "../api/posts/fetchPosts";
import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initFetch } from "../actions/posts";

export default function PostsPage() {
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
      <Link to="/newPost">
        <button>글 쓰기</button>
      </Link>
      <PostsList />
    </>
  );
}

import { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts/fetchPosts";
import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Link to="/newPost">
        <button>글 쓰기</button>
      </Link>
      <PostsList posts={posts} />
    </>
  );
}

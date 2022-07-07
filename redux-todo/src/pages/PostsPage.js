import { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts/fetchPosts";
import PostsList from "../components/PostsList";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <PostsList posts={posts} />;
}

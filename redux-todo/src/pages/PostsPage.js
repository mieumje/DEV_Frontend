import { useEffect } from "react";
import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initialFetch } from "../actions/posts";
import Heading from "../components/Heading";
import { useSelector } from "react-redux";

export default function PostsPage() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialFetch());
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

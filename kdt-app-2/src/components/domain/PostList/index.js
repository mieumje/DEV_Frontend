import { usePostContext } from "../../../contexts/PostProvider";
import PostItem from "../PostItem";

const PostList = () => {
  const { posts } = usePostContext();
  
  return (
    <ul>
      {
        posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))
      }
      <button>Delete</button>
    </ul>
  );
};

export default PostList;
import axios from "axios";
import { NextPageContext } from "next";
import { Post } from "../../interface/Post";

interface Props {
  post: Post;
}

export const getServerSideProps = async (context: NextPageContext) => {
  const postId = context.query.id;
  const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

  return {
    props: { post }
  }
}

const PostPage = ({ post }: Props) => {

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostPage;
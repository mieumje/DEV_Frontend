import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return (
    <div>
      Post {router.query.id}
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}

export default Post;
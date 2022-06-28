import axios from 'axios'
import { Post } from '../interface/Post';

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return {
    props: { posts }
  }
}

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <div>
      Home
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage;
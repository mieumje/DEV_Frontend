import { useParams } from "react-router-dom";
import { useAsync } from '@hooks';
import axios from "axios";
import { Spinner, Header } from "@components";
import { Fragment } from "react";

const PostPage = () => {
  const { id } = useParams();

  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.data);
  }, [id]);

  return (
    <div>
      {post.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header strong>{post.value?.title}</Header>
        </Fragment>
      )}
    </div>
  );
};

export default PostPage;
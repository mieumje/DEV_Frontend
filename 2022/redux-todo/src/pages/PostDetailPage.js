import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetails } from "../api/posts/fetchPostDetails";
import styled from "styled-components";
import Heading from "../components/Heading";

const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 1rem;
`;

const PostBody = styled.div`
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 0.4rem;
  padding: 1rem;
`;

export default function PostDetailPage() {
  const [postDetails, setPostDetails] = useState({});
  const params = useParams();
  const { id } = params;
  const getPostDetails = async (id) => {
    const data = await fetchPostDetails(id);
    setPostDetails(data);
  };

  useEffect(() => {
    getPostDetails(id);
  }, [id]);

  return (
    <>
      {postDetails && (
        <PostDetailWrapper>
          <Heading level={1}>{postDetails.title}</Heading>
          <PostBody>{postDetails.body}</PostBody>
        </PostDetailWrapper>
      )}
    </>
  );
}

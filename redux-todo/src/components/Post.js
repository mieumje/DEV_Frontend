import styled from "styled-components";
import { Link } from "react-router-dom";

const PostWrapper = styled.div`
  width: 500px;
  display: flex;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const PostsTitle = styled.div`
  font-weight: bold;
  width: 470px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
`;

export default function Post({ children, id }) {
  return (
    <PostWrapper>
      <PostsTitle>
        <Link to={`/posts/${id}`}>{children}</Link>
      </PostsTitle>
      <Link to={`/posts/${id}`}>
        <StyledButton>Details</StyledButton>
      </Link>
    </PostWrapper>
  );
}

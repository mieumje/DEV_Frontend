import styled from "styled-components";

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
`;

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
`;

export default function Post({ children, id }) {
  return (
    <PostWrapper>
      <PostsTitle>{children}</PostsTitle>
      <StyledButton onClick={() => console.log(`move to here ${id}`)}>
        Details
      </StyledButton>
    </PostWrapper>
  );
}

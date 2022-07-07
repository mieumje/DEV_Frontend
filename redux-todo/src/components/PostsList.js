import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Post from "./Post";

const StyledLi = styled.li`
  cursor: pointer;
`;

export default function PostsList({ posts }) {
  return (
    <>
      <Heading level={1}>Posts List</Heading>
      <ol>
        {posts &&
          posts.map((post) => {
            return (
              <StyledLi key={post.id}>
                <Post id={post.id}>{post.title}</Post>
              </StyledLi>
            );
          })}
      </ol>
    </>
  );
}

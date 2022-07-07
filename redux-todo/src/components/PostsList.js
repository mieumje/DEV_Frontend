import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Post from "./Post";

const StyledLi = styled.li`
  list-style: none;
`;

export default function PostsList({ posts }) {
  return (
    <>
      <Heading level={1}>Posts List</Heading>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <StyledLi key={post.id}>
                <Post id={post.id}>{post.title}</Post>
              </StyledLi>
            );
          })}
      </ul>
    </>
  );
}

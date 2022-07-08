import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Heading from "./Heading";
import Post from "./Post";

const StyledLi = styled.li`
  width: 400px;
`;

export default function PostsList() {
  const selector = useSelector((state) => state.posts);

  return (
    <>
      <Heading level={1}>Posts List</Heading>
      <ol>
        {selector &&
          selector.map((post) => {
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

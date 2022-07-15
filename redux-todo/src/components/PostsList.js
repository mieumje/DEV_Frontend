import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Post from "./Post";

const StyledLi = styled.li`
  width: 400px;
`;

const StyledOl = styled.ol`
  color: ${(prop) => prop.color};
`;

export default function PostsList({ theme }) {
  const selector = useSelector((state) => state.posts.postsList);

  return (
    <>
      <StyledOl color={`${theme ? "white" : "#1a1a1a"}`}>
        {selector &&
          selector.map((post) => {
            return (
              <StyledLi key={post.id}>
                <Post id={post.id}>{post.title}</Post>
              </StyledLi>
            );
          })}
      </StyledOl>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addNewPost } from "../api/posts/addNewPost";
import Heading from "../components/Heading";

const NewPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  height: 1rem;
  border-radius: 0.4rem;
  margin: 1rem 0;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 10rem;
  border-radius: 0.4rem;
  resize: none;
  margin: 1rem 0;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 50px;
`;

export default function AddPostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewPost(title, body);
    navigate("/posts");
  };

  const onBodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <NewPostWrapper>
        <Heading level={1}>글 쓰기</Heading>
        <StyledForm action="submit" onSubmit={onSubmitHandler}>
          <StyledLabel>제목</StyledLabel>
          <StyledInput type="text" onChange={onTitleChangeHandler} />
          <StyledLabel>내용</StyledLabel>
          <StyledTextarea
            name="newpost"
            cols="30"
            rows="10"
            placeholder="내용을 입력하세요"
            value={body}
            onChange={onBodyChangeHandler}
          ></StyledTextarea>
          <StyledButton>완료</StyledButton>
        </StyledForm>
      </NewPostWrapper>
    </>
  );
}

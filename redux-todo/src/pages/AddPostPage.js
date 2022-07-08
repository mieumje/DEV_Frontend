import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addNewPost } from "../api/posts/addNewPost";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/posts";

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
  color: ${(props) => props.color};
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  height: 1rem;
  border-radius: 0.4rem;
  margin: 1rem 0;
  font-size: 1rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const StyledTextarea = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 10rem;
  border-radius: 0.4rem;
  resize: none;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 50px;
`;

export default function AddPostPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addPost(1, title, body));
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
        <Heading level={1} color={`${theme ? "white" : "#1a1a1a"}`}>
          글 쓰기
        </Heading>
        <StyledForm action="submit" onSubmit={onSubmitHandler}>
          <StyledLabel color={`${theme ? "white" : "#1a1a1a"}`}>
            제목
          </StyledLabel>
          <StyledInput
            type="text"
            onChange={onTitleChangeHandler}
            bgColor={`${theme ? "#808080" : "white"}`}
            color={`${theme ? "white" : "#1a1a1a"}`}
          />
          <StyledLabel color={`${theme ? "white" : "#1a1a1a"}`}>
            내용
          </StyledLabel>
          <StyledTextarea
            name="newpost"
            cols="30"
            rows="10"
            placeholder="내용을 입력하세요"
            value={body}
            onChange={onBodyChangeHandler}
            bgColor={`${theme ? "#808080" : "white"}`}
            color={`${theme ? "white" : "#1a1a1a"}`}
          ></StyledTextarea>
          <StyledButton>완료</StyledButton>
        </StyledForm>
      </NewPostWrapper>
    </>
  );
}

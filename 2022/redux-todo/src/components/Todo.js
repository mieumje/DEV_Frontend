import { useDispatch } from "react-redux";
import styled from "styled-components";
import toggleTodo from "../actions/todos/toggleTodo";
import useToggle from "../hooks/useToggle";

const TodoWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
`;

const TodoTitle = styled.div`
  font-weight: ${(props) => (props.completed ? "none" : "bold")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  width: 470px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function Todo({ userId, id, title, completed }) {
  const [state, onToggle] = useToggle(completed);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    onToggle();
    dispatch(
      toggleTodo({
        userId,
        id,
        title,
        completed: !state,
      })
    );
  };

  return (
    <TodoWrapper>
      <TodoTitle completed={state}>{title}</TodoTitle>
      <StyledButton onClick={onClickHandler}>Complete</StyledButton>
    </TodoWrapper>
  );
}

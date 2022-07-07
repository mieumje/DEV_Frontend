import styled from "styled-components";
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

export default function Todo({ children, completed }) {
  const [state, onToggle] = useToggle(completed);

  return (
    <TodoWrapper>
      <TodoTitle completed={state}>{children}</TodoTitle>
      <StyledButton onClick={() => onToggle()}>Complete</StyledButton>
    </TodoWrapper>
  );
}

import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const StyledLi = styled.li`
  width: 400px;
`;

const StyledOl = styled.ol`
  color: ${(props) => props.color};
`;

export default function TodosList({ theme }) {
  const todos = useSelector((state) => state.todos.todosList);

  return (
    <>
      <StyledOl color={`${theme ? "white" : "#1a1a1a"}`}>
        {todos &&
          todos.map((todo) => {
            return (
              <StyledLi key={todo.id}>
                <Todo
                  userId={todo.userId}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              </StyledLi>
            );
          })}
      </StyledOl>
    </>
  );
}

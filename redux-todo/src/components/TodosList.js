import styled from "styled-components";
import Todo from "./Todo";

const StyledLi = styled.li`
  list-style: none;
`;

export default function TodosList({ todos }) {
  return (
    <ul>
      {todos &&
        todos.map((todo) => {
          return (
            <StyledLi key={todo.id}>
              <Todo completed={todo.completed}>{todo.title}</Todo>
            </StyledLi>
          );
        })}
    </ul>
  );
}

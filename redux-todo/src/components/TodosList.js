import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const StyledLi = styled.li`
  width: 400px;
`;

export default function TodosList() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <ol>
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
      </ol>
    </>
  );
}

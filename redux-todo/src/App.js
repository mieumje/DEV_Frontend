import React, { useEffect, useState } from "react";
import { fetchTodos } from "./api/todos/fetchTodos";
import Heading from "./components/Heading";
import Todo from "./components/Todo";
import TodoList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Heading level={1}>Simple Todos</Heading>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

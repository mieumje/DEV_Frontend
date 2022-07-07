import Heading from "../components/Heading";
import React, { useState, useEffect } from "react";
import { fetchTodos } from "../api/todos/fetchTodos";
import TodosList from "../components/TodosList";

export default function TodosPage() {
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
      <Heading level={1}>Todos List</Heading>
      <TodosList todos={todos} />
    </>
  );
}

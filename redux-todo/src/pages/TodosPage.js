import Heading from "../components/Heading";
import React, { useEffect } from "react";
import { fetchTodos } from "../api/todos/fetchTodos";
import TodosList from "../components/TodosList";
import { useDispatch } from "react-redux";
import { initFetch } from "../actions/todos";

export default function TodosPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      dispatch(initFetch(data));
    };

    getTodos();
  }, [dispatch]);

  return (
    <>
      <Heading level={1}>Todos List</Heading>
      <TodosList />
    </>
  );
}

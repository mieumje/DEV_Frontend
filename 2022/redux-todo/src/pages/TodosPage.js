import Heading from "../components/Heading";
import React, { useEffect } from "react";
import { fetchTodos } from "../api/todos/fetchTodos";
import TodosList from "../components/TodosList";
import { useDispatch, useSelector } from "react-redux";
import { initFetch } from "../actions/todos";

export default function TodosPage() {
  const theme = useSelector((state) => state.theme.dark);
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
      <Heading level={1} color={`${theme ? "white" : "#1a1a1a"}`}>
        Todos List
      </Heading>
      <TodosList theme={theme} />
    </>
  );
}

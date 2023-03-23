import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

export default function App({ $target, initialState = [] }) {
  this.state = initialState;

  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoForm({
    $target,
    onSubmit: (value) => {
      const newState = [...todoList.state, { text: value }];
      todoList.setState(newState);

      setItem("todos", JSON.stringify(newState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}

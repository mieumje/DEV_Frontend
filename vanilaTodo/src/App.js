import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

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
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}

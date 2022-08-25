import Header from "./Header.js";
import TodoList from "./TodoList.js";

export default function App({ $target, initialState = [] }) {
  this.state = initialState;

  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoList({
    $target,
    initialState,
  });
}

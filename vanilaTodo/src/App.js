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
      console.log(value);
    },
  });

  new TodoList({
    $target,
    initialState,
  });
}

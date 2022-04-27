import { request } from "./api.js";
import TodoList from "./TodoList.js";

export default function App({
  $target,
}){
  this.state = {
    todos: [],
  };

  const uncompletedTodoList = new TodoList({
    $target,
    initialState: {
      title: '미완료된 일',
      todos: [],
    },
  });

  const completedTodoList = new TodoList({
    $target,
    initialState: {
      title: '완료된 일',
      todos: [],
    },
  });

  this.setState = nextState => {
    this.state = nextState;

    const { todos } = this.state;

    uncompletedTodoList.setState({
      ...uncompletedTodoList.state,
      todos: todos.filter(todo => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter(todo => todo.isCompleted),
    });
  };

  const fetchTodos = async () => {
    const todos = await request('');

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();
}
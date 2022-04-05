import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./Storage.js";

export default function App({ $target, initialState}){
    new Header({
        $target,
        text: "Simple Todo List"
    });

    new TodoForm({
        $target,
        onSubmit: (text) => {
            const newState = [...todoList.state, { text }];
            todoList.setState(newState);

            setItem('todos', JSON.stringify(newState));
        }
    });
    
    const todoList = new TodoList({
        $target,
        initialState: initialState
    });
}
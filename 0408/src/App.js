import { request } from "./api.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target }){
    this.state = {
        username: '박민제',
        todos: [],
        isTodoLoading: false
    };

    this.setState = (nextState) => {
        this.state = nextState;
        header.setState({
            username: this.state.username,
            isTodoLoading: this.state.isTodoLoading,
        })
        todoList.setState({
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos
        });
    }

    const header = new Header({
        $target,
        initialState: {
            username: this.state.username,
            isTodoLoading: this.state.isTodoLoading
        }
    });

    new TodoForm({
        $target,
        onSubmit: async (content) => {
            const todo = {
                content,
                isCompleted: false
            };
            this.setState({
                ...this.state,
                todos: [
                    ...this.state.todos,
                    todo
                ]
            })
            await request(`/${this.state.username}`, {
                method: "POST",
                body: JSON.stringify(todo)
            });
            await fetchTodos();
        }
    });
    
    const todoList = new TodoList({
        $target,
        initialState: {
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos
        },
        onToggle: async (id) => {
            const { username } = this.state;
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id);
            const nextTodo = [...this.state.todos];
            nextTodo[todoIndex].isCompleted = !nextTodo[todoIndex].isCompleted;
            this.setState({
                ...this.state,
                todos: nextTodo
            });
            await request(`/${username}/${id}/toggle`, {
                method: 'PUT'
            });
            
            await fetchTodos();
        },
        onRemove: async (id) => {
            const { username } = this.state.username;
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id);
            const nextTodo = [...this.state.todos];
            nextTodo.splice(todoIndex, 1);
            this.setState({
                ...this.state,
                todos: nextTodo
            });
            await request(`/${username}/${id}?delay=3000`,{
                method: 'DELETE'
            });

            await fetchTodos();
        }
    });

    const fetchTodos = async () => {
        const { username } = this.state;
        console.log(username)
        if(username){
            this.setState({
                ...this.state,
                isTodoLoading: true
            });
            const todos = await request(`/${username}`);
            this.setState({
                ...this.state,
                todos
            });
            this.setState({
                ...this.state,
                isTodoLoading: false
            });
        }
    }

    fetchTodos();
}
import { request } from "./api.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import UserList from "./UserList.js";
import { parse } from "./querystring.js";

export default function App({ $target }){
    const $userListContainer = document.createElement('div');
    const $todoListContainer = document.createElement('div');
    $target.appendChild($userListContainer);
    $target.appendChild($todoListContainer);

    this.state = {
        userList: [],
        selectedUsername: '',
        todos: [],
        isTodoLoading: false
    };

    this.setState = (nextState) => {
        this.state = nextState;
        header.setState({
            selectedUsername: this.state.selectedUsername,
            isTodoLoading: this.state.isTodoLoading,
        })
        todoList.setState({
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos
        });
        userList.setState(this.state.userList);

        this.render();
    }
    this.render = () => {
        const { selectedUsername } = this.state;
        $todoListContainer.style.display = selectedUsername ? 'block' : 'none';
    };

    const userList = new UserList({
        $target: $userListContainer,
        initialState: this.state.userList,
        onSelect: async (username) => {
            history.pushState(null, null, `?selectedUsername=${username}`);
            this.setState({
                ...this.state,
                selectedUsername: username
            });
            await fetchTodos();
        }
    });

    const header = new Header({
        $target: $todoListContainer,
        initialState: {
            selectedUsername: this.state.selectedUsername,
            isTodoLoading: this.state.isTodoLoading
        }
    });

    new TodoForm({
        $target: $todoListContainer,
        onSubmit: async (content) => {
            const todo = {
                content,
                isCompleted: false
            };
            const isFirstTodoAdd = this.state.todos.length === 0;

            this.setState({
                ...this.state,
                todos: [
                    ...this.state.todos,
                    todo
                ]
            })
            await request(`/${this.state.selectedUsername}`, {
                method: "POST",
                body: JSON.stringify(todo)
            });
            await fetchTodos();

            if(isFirstTodoAdd){
                await fetchUserList();
            }
        }
    });
    
    const todoList = new TodoList({
        $target: $todoListContainer,
        initialState: {
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos,
            selectedUsername: this.state.selectedUsername
        },
        onToggle: async (id) => {
            const { selectedUsername } = this.state;
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id);
            const nextTodo = [...this.state.todos];
            nextTodo[todoIndex].isCompleted = !nextTodo[todoIndex].isCompleted;
            this.setState({
                ...this.state,
                todos: nextTodo,
                selectedUsername: this.state.selectedUsername
            });
            await request(`/${selectedUsername}/${id}/toggle`, {
                method: 'PUT'
            });
            
            await fetchTodos();
        },
        onRemove: async (id) => {
            const { selectedUsername } = this.state.selectedUsername;
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id);
            const nextTodo = [...this.state.todos];
            nextTodo.splice(todoIndex, 1);
            this.setState({
                ...this.state,
                todos: nextTodo
            });
            await request(`/${selectedUsername}/${id}?delay=3000`,{
                method: 'DELETE'
            });

            await fetchTodos();
        }
    });
    const fetchUserList = async () => {
        const userList = await request(`/users`);
        this.setState({
            ...this.state,
            userList
        });
    }
    const fetchTodos = async () => {
        const { selectedUsername } = this.state;
        console.log(selectedUsername)
        if(selectedUsername){
            this.setState({
                ...this.state,
                isTodoLoading: true
            });
            const todos = await request(`/${selectedUsername}`);
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
    const init = async () => {
        await fetchUserList();

        // url에 특정 사용자를 나타내는 값이 있을 경우
        console.log(location.pathname);
        const { search } = location;
        if(search.length > 0) {
            const { selectedUsername } = parse(search.substring(1));
            console.log(selectedUsername);
            if(selectedUsername){
                this.setState({
                    ...this.state,
                    selectedUsername
                });
    
                await fetchTodos();
            }
        }

    };

    this.render();
    init();

    window.addEventListener('popstate', () => {
        init();
    })
    
}
function App({ $target, initialState}){
    new Header({
        $target,
        text: "Simple Todo List"
    });

    new TodoForm({
        $target,
        onSubmit: (text) => {
            const newState = [...todoList.state, { text }];
            todoList.setState(newState);
        }
    });
    
    const todoList = new TodoList({
        $target,
        initialState: initialState
    });
}
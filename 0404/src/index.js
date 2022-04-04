const data = [
    {
        text: "Javscript 학습"
    },
    {
        text: "함수형 프로그래밍 강의"
    },
];

const $app = document.querySelector('.app');

new TodoForm({
    $target: $app,
    onSubmit: (text) => {
        const newState = [...todoList.state, { text }];
        todoList.setState(newState);
    }
});

const todoList = new TodoList({
    $target: $app,
    initialState: data
});
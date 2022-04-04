// params.$target - 해당 컴포넌트가 추가될 DOM
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList(params){
    const $todoList = document.createElement('div');
    const $target = params.$target;
    $target.appendChild($todoList);

    this.state = params.intialState;

    this.render = () => {
        $todoList.innerHTML = `
        <ul>
            ${this.state.map(todo => `<li>${todo.text}</li>`).join('')}
        </ul>
        `;
    };

    this.render();
};
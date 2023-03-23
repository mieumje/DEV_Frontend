// params.$target - 해당 컴포넌트가 추가될 DOM
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList({$target, initialState}){
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);

    this.state = initialState;

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render = () => {
        $todoList.innerHTML = `
        <ul>
            ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
        </ul>
        `;
    };

    this.render();
};
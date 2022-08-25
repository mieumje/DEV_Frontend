export default function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("ul");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
      ${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
    `;
  };

  this.render();
}

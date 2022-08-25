import Header from "./Header.js";

export default function App({ $target, initialState = [] }) {
  this.state = initialState;

  new Header({
    $target,
    text: "Simple Todo List",
  });

  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state.map((todo) => `<li>${todo.text}</li>`).join("")}
      </ul>
    `;
  };

  this.render();
}

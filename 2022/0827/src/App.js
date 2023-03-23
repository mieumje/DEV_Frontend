import { request } from "./utils/api.js";

export default function App({ $target }) {
  let init = false;
  const $container = document.createElement("div");
  $container.className = "container";
  $target.appendChild($container);

  this.state = [];

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = async () => {
    if (!init) {
      $container.innerHTML = "...Loading";
      const data = await request("src/data/data.json");
      this.setState(data);
      init = true;
    }

    $container.innerHTML = `
      ${this.state
        .map((info) => {
          const { name, role } = info;
          return `
          <div class='card'>
            <span class='card-name'>${name}</span>
            <span class='card-role'>${role}</span>
          </div>
        `;
        })
        .join("")}
    `;
  };

  this.render();
}

export default function Header({ $target, text }) {
  const $heading = document.createElement("h1");
  $target.appendChild($heading);

  this.render = () => {
    $heading.textContent = text;
  };

  this.render();
}

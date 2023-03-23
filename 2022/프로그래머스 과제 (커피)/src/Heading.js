export default function Heading({ $target, text }) {
  const header = document.createElement("h1");
  $target.appendChild(header);

  this.route = () => {
    header.textContent = text;
  };

  this.route();
}

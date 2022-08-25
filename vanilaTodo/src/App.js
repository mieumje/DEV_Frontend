import Header from "./Header.js";

export default function App({ $target, initialState }) {
  new Header({
    $target,
    text: "Simple Todo List",
  });
}

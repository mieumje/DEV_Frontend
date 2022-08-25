import App from "./App.js";

const $app = document.querySelector(".app");

const initialState = [
  {
    text: "8월 25일 할일 1",
  },
  {
    text: "8월 25일 할일 2",
  },
];

new App({
  $target: $app,
  initialState,
});

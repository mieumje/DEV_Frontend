import { fetch } from "..";
const endPoints = "/todos";
export const fetchTodos = (options) => {
  return fetch(`${endPoints}`, options);
};

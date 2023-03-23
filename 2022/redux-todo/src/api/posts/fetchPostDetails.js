import { fetch } from "..";
const endPoints = "/posts";
export const fetchPostDetails = (id, options) => {
  return fetch(`${endPoints}/${id}`, options);
};

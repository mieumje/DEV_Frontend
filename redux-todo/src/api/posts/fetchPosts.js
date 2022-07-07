import { fetch } from "..";
const endPoints = "/posts";
export const fetchPosts = (options) => {
  return fetch(`${endPoints}`, options);
};

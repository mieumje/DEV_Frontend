import { PostAPI } from "..";
const endPoints = "/posts";
export const addNewPost = (title, body) => {
  return PostAPI(`${endPoints}`, {
    userId: 1,
    title,
    body,
  });
};

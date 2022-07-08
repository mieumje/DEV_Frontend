import { createStore, combineReducers } from "redux";
import todoReducer from "../reducer/todos";
import postReducer from "../reducer/posts";
import themeReducer from "../reducer/theme";

const reducer = combineReducers({
  posts: postReducer,
  todos: todoReducer,
  theme: themeReducer,
});

export const store = createStore(reducer);

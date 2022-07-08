import { createStore, combineReducers } from "redux";
import todoReducer from "../reducer/todos";
import postReducer from "../reducer/posts";

const reducer = combineReducers({ posts: postReducer, todos: todoReducer });

export const store = createStore(reducer);

import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter";
import { taskReducer } from "./reducer/tasks";

const rootStore = combineReducers({ counterReducer, taskReducer });

export const store = createStore(rootStore);

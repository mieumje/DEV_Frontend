import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter";
import { taskReducer } from "./reducer/tasks";
import { setItem, getItem } from "../utils/storage";

const rootStore = combineReducers({ counterReducer, taskReducer });

const persistedState = getItem("taskState");

export const store = createStore(rootStore, persistedState);

store.subscribe(() => {
  const state = store.getState();
  setItem("taskState", state);
});

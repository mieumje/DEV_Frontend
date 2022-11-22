import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter";

export const store = createStore(counterReducer);

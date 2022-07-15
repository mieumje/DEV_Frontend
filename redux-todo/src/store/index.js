import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todoReducer from "../reducer/todos";
import postReducer from "../reducer/posts";
import themeReducer from "../reducer/theme";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  posts: postReducer,
  todos: todoReducer,
  theme: themeReducer,
});

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return dispatch(action);
};

const tmpMiddleware = (store) => (dispatch) => (action) => {
  // disaptch 이전에 처리할 기능 추가
  console.log("before action...", store.getState(), action);
  dispatch(action);
  console.log("after action...", store.getState());
  // disaptch 이후에 처리할 기능 추가
};

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, tmpMiddleware)
);

export const store = createStore(reducer, enhancer);

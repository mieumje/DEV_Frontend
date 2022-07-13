import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import todoReducer from "../reducer/todos";
import postReducer from "../reducer/posts";
import themeReducer from "../reducer/theme";

const reducer = combineReducers({
  posts: postReducer,
  todos: todoReducer,
  theme: themeReducer,
});

const tmpMiddleware = (store) => (dispatch) => (action) => {
  // disaptch 이전에 처리할 기능 추가
  console.log("action logging...", action);
  dispatch(action);
  // disaptch 이후에 처리할 기능 추가
};

const enhancer = compose(applyMiddleware(tmpMiddleware));

export const store = createStore(reducer, enhancer);

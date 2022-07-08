import { createStore } from "redux";

const initialState = [];

const postReducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_POSTS": {
      return action.payload;
    }
    case "ADD_POST": {
      return [...prevState, action.payload];
    }
    default: {
      return;
    }
  }
};

export const store = createStore(postReducer, initialState);

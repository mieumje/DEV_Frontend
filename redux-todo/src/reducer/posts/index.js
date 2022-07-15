import produce from "immer";

const initialState = {
  postsList: [],
};

const postReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "FETCH_POSTS": {
        draft.postsList = action.payload;
        break;
      }
      case "ADD_POST": {
        draft.postsList.push(action.payload);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default postReducer;

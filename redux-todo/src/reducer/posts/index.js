const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS": {
      return action.payload;
    }
    case "ADD_POST": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default postReducer;

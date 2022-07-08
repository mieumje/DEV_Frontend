const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS": {
      return action.payload;
    }
    case "TOGGLE_TODO": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;

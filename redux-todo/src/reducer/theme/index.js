const initialState = false;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;

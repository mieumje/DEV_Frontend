const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        count: state.count + action.count,
      };
    case "MINUS":
      return {
        ...state,
        count: state.count - action.count,
      };
    case "INIT":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

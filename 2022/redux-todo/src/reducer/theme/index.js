import produce from "immer";

const initialState = {
  dark: false,
};

const themeReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "DARK": {
        console.log(action.payload);
        draft.dark = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default themeReducer;

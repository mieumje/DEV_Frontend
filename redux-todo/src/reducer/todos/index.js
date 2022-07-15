import produce from "immer";

const initialState = {
  todosList: [],
};

const todoReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "FETCH_TODOS": {
        draft.todosList = action.payload;
        break;
      }
      case "TOGGLE_TODO": {
        const updateTodo = action.payload;
        draft.todosList.map((todo) =>
          todo.id === updateTodo.id ? updateTodo : todo
        );
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default todoReducer;

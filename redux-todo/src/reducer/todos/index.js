const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS": {
      return action.payload;
    }
    case "TOGGLE_TODO": {
      const updateTodo = action.payload;
      console.log(updateTodo);
      const nextState = state.map((todo) =>
        todo.id === updateTodo.id ? updateTodo : todo
      );

      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;

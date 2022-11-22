const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const { task, count } = action.task;
      const checkDuplicate = state.tasks.filter((item) => item.task === task);

      if (checkDuplicate.length) {
        return {
          ...state,
          tasks: state.tasks.map((item) =>
            item.task === task ? { task, count: item.count + count } : item
          ),
        };
      }
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    }
    default:
      return {
        ...state,
      };
  }
};

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
      } else {
        return {
          ...state,
          tasks: [...state.tasks, action.task],
        };
      }
    }
    case "UPDATE": {
      const { task, count } = action.task;
      console.log(action);
      const tmp = state.tasks.map((item) => {
        if (item.task === task) {
          return { task: item.task, count: item.count + count };
        }
        return item;
      });
      console.log(tmp);
      return {
        ...state,
        tasks: tmp,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

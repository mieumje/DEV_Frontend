// reducer는 state를 변화시키는 로직(상태를 변화시키는 순수 함수)

import { Action, Task } from "./types";

export const tasks = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return [...state, newTask];
    }
    case 'UPDATE_TASK': {
      const updateTask = action.payload;
      return state.map(oldTask => oldTask.id === updateTask.id ? updateTask : oldTask);
    }
    case 'REMOVE_TASK': {
      const removeTask = action.payload;
      return state.filter(task => task.id !== removeTask.id);
    }
    default: {
      return state;
    }
  }
};
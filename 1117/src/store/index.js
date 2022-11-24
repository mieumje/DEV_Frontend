import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter";
import { taskReducer } from "./reducer/tasks";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "task",
  storage,
};

export const rootStore = combineReducers({
  counterReducer,
  taskReducer: persistReducer(persistConfig, taskReducer),
});

export const store = createStore(rootStore);

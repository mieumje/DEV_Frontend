// root reducer를 만든다.
// 최상위 index.tsx에서 Provider로 App을 감싸고
// 해당 Provider에 store 값을 연결해야 하는데,
// reducer를 전부 합친 store를 만드는 곳이다.
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { tasks } from './tasks';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ tasks });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export type RootState = ReturnType<typeof rootReducer>;
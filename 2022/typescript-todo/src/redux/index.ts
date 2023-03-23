// root reducer를 만든다.
// 최상위 index.tsx에서 Provider로 App을 감싸고
// 해당 Provider에 store 값을 연결해야 하는데,
// reducer를 전부 합친 store를 만드는 곳이다.
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { tasks } from './tasks';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: session,
  whitelist: ['tasks'],
}

const combinedReducers = combineReducers({ tasks });

const rootReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export const persistor = persistStore(store as any)// 스토리지에 빼오기 위한 저장소

export type RootState = ReturnType<typeof rootReducer>;
import { createStore } from 'vuex';
import message from './message';

export default createStore({
  state() {
    return {
      msg: 'Hello Vuex!',
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { // modules 옵션으로 외부의 독립된 store 파일을 가져올 수 있다.
    message
  }
});
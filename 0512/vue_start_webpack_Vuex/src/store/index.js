import { createStore } from 'vuex';

export default createStore({ // 중앙 집중식 저장소(Store) 생성
  state() { // 데이터를 객체 데이터로 생성하면 참조 관계가 발생하므로 함수형으로 만든다.
    return {
      msg: 'Hello Vuex!',
      count: 1
    };
  },
  getters: {
    reversedMsg(state) {
      return state.msg.split('').reverse().join('');
    }
  },
  mutations: {
    increaseCount(state) {  // 매개 변수를 통해 해당하는 state를 참조할 수 있다.
      state.count += 1;
    }
  }
});
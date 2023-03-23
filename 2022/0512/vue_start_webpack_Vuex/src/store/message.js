export default {
  // namespaced, 즉 이름 범위라는 것을 가져야 되고
  // 현재 프로젝트에서 사용될 때 해당하는 이름 범위로 데이터들을 쓸 수 있다.
  namespaced: true,
  state() {
    return {
      message: 'Hello Store Module~'
    };
  },
  getters: {
    reversedMessage(state) {
      return state.message.split('').reverse().join('');
    }
  },
  mutations: {
    updateMessage(state, newValue) {
      return state.message = newValue;
    }
  },
  actions: {
    async fetchTodo(context) {
      const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(res => res.json());
      console.log(todo);

      context.commit('updateMessage', todo.title); // message라는 namespaced 내부라서 namespaced를 명시할 필요가 없다.
    }
  }
};
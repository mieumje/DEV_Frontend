export default {
  namespaced: true,
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
    decreaseCount(state) {
      state.count -= 1;
    }
  }
};
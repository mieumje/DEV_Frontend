export default {
  // namespaced, 즉 이름 범위라는 것을 가져야 되고
  // 현재 프로젝트에서 사용될 때 해당하는 이름 범위로 데이터들을 쓸 수 있다.
  namespaced: true,
  state() {
    return {
      message: 'Hello Store Module~'
    };
  },
  getters: {},
  mutations: {},
  actions: {}
};
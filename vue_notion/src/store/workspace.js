export default {
  namespaced: true,
  state() {
    return {
      workspaces: []
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
      console.log(state, 'is state', state.workspaces);
      console.log(payload, 'is payload');
    }
  },
  actions: {
    createWorkspace() {

    },
    async readWorkspaces(context) {
      const workspaces = await fetch('https://kdt-frontend.programmers.co.kr/documents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'mieumje'
        }
      }).then(res => res.json());

      context.commit('assignState', {
        workspaces
      });
    },
    readWorkspace() {

    },
    updateWorkspace() {

    },
    deleteWorkspace() {

    }
  },
};
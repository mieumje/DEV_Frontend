import router from '~/routes';

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
      currentWorkspace: {}
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
    async createWorkspace(context, payload = {}) {
      const { parentId } = payload;
      const workspace = await fetch('https://kdt-frontend.programmers.co.kr/documents/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'mieumje'
        },
        body: JSON.stringify({
          title: '',
          parent: parentId
        })
      }).then(res => res.json());

      await context.dispatch('readWorkspaces');
      router.push({
        name: 'Workspace',
        params: {
          id: workspace.id
        }
      });
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
    async readWorkspace(context, payload) {
      const { id } = payload;
      const workspace = await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'mieumje'
        }
      }).then(res => res.json());

      context.commit('assignState', {
        currentWorkspace: workspace
      });
    },
    async updateWorkspace(context, payload) {
      const { id, title, content} = payload;
      await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'mieumje'
        },
        body: JSON.stringify({
          title,
          content
        })
      }).then(res => res.json());

      context.dispatch('readWorkspaces');
    },
    async deleteWorkspace(context, payload) {
      const { id } = payload;
      await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'mieumje'
        }
      }).then(res => res.json());

      context.dispatch('readWorkspaces');
    }
  },
};
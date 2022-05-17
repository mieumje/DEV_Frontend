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
    }
  },
  actions: {
    async createWorkspace(context, payload = {}) {
      const { parentId } = payload;
      const workspace = await _request({
        method: 'POST',
        body: JSON.stringify({
          title: '',
          parent: parentId
        })
      });

      await context.dispatch('readWorkspaces');
      router.push({
        name: 'Workspace',
        params: {
          id: workspace.id
        }
      });
    },
    async readWorkspaces(context) {
      const workspaces = await _request({
        method: 'GET',
      });

      context.commit('assignState', {
        workspaces
      });

      if (!workspaces.length) {
        context.dispatch('createWorkspace');
      }
    },
    async readWorkspace(context, payload) {
      const { id } = payload;
      try {
        const workspace = await _request({
          id,
          method: 'GET'
        });

        context.commit('assignState', {
          currentWorkspace: workspace
        });
      } catch (error) {
        router.push('/error');
      }
    },
    async updateWorkspace(context, payload) {
      const { id, title, content} = payload;
      await _request({
        id,
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        })
      });

      context.dispatch('readWorkspaces');
    },
    async deleteWorkspace(context, payload) {
      const { id } = payload;
      await _request({
        id,
        method: 'DELETE',
      });

      await context.dispatch('readWorkspaces');

      if (id === parseInt(router.currentRoute.value.params.id, 10)) {
        router.push({
          name: 'Workspace',
          params: {
            id: context.state.workspaces[0].id
          }
        });
      }
    }
  },
};

async function _request(options) {
  const { id = '' } = options;
  return await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-username': 'mieumje'
    }
  }).then(res => res.json());
}
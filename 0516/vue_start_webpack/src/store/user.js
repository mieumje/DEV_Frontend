import router from '~/routes';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {
    logIn(context, payload) {
      const { id, pw } = payload;
      if (id && pw) {
        context.commit('updateLoggedIn', true);
        const redirect = router.currentRoute.value.query.redirect;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      }
    },
    logOut(context) {
      context.commit('updateLoggedIn', false);
    }
  }
};
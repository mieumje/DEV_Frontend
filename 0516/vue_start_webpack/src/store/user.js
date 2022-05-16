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
    initialize(context) {
      if (localStorage.getItem('isLoggedIn')) {
        context.commit('updateLoggedIn', true);
      }
    },
    logIn(context, payload) {
      const { id, pw } = payload;
      if (id && pw) {
        localStorage.setItem('isLoggedIn', true);
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
      localStorage.removeItem('isLoggedIn');
      context.commit('updateLoggedIn', false);
      const requiredAuth = router.currentRoute.value.meta.requiredAuth;
      if (requiredAuth) {
        router.push('/');
      }
    }
  }
};
// 네비게이션 가드
import router from './index';
import store from '~/store';

router.beforeEach(to => {
  if (to.meta.requiredAuth && !store.state.user.isLoggedIn) { // 로그인이 되어 있지 않고, 로그인을 해야 접속할 수 있는 페이지로 접근하는 경우
    return {
      path: '/login', // 로그인 페이지로 이동
      query: { redirect: to.fullPath }  // 로그인을 하는 경우, 다시 원래 접근하려는 페이지로 돌려보낸다.
    };
  }
});
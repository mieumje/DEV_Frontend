import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Login from './Login';
import About from './About';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
      meta: {
        requiredAuth: true  // 로그인을 해야 접속할 수 있다는 meta 정보
      }
    },
    {
      path: '/login',
      component: Login
    },
  ]
});
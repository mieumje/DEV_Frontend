import { createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)', // 지정한 경로를 제외한 나머지 경로에 해당
      component: NotFound // 지정한 경로를 제외한 경로에 들어섰을 때 보여줄 컴포넌트
    }
  ]
});
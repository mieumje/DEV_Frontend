import { createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Docs from './Docs';
import DocsId from './DocsId';

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
      path: '/documents',
      component: Docs,
    },
    {
      path: '/documents/:id',  // children 경로에서는 '/'를 사용하면 안된다. '/'는 루트 경로를 의미함.
      component: DocsId
    },
    {
      path: '/:notFound(.*)', // 지정한 경로를 제외한 나머지 경로에 해당
      component: NotFound // 지정한 경로를 제외한 경로에 들어섰을 때 보여줄 컴포넌트
    }
  ]
});
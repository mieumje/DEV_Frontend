import { createApp } from 'vue';
import App from '~/App';
import fetchPlugin from '~/plugins/fetch'; // plugin 등록

const app = createApp(App);

app.use(fetchPlugin); // use 메서드를 통해 plugin을 등록

app.mount('#app');
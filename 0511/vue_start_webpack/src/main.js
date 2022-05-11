import { createApp } from 'vue';
import App from '~/App';
import Btn from '~/components/Btn';
import World from '~/components/World';

const app = createApp(App);

app.component('Btn', Btn); // Btn 컴포넌트를 전역 컴포넌트로 등록
app.component('World', World);

app.mount('#app');
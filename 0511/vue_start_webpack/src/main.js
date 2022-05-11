import { createApp } from 'vue';
import App from '~/App';
import Btn from '~/components/Btn';

const app = createApp(App);

app.component('Btn', Btn); // Btn 컴포넌트를 전역 컴포넌트로 등록

app.mount('#app');
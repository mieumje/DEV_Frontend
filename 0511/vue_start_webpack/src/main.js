import { createApp } from 'vue';
import App from '~/App';
import Btn from '~/components/Btn'; // Btn 컴포넌트를 전역 객체로 등록

const app = createApp(App);

app.component('Btn', Btn); // 옵션을 등록하는 부분에 컴포넌트를 등록

app.mount('#app');
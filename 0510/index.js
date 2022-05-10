const App = {
  
};

const app = Vue.createApp(App);
app.component('upper-name', {
  template: `<div>{{ name }}</div>`,
  props: ['name']
})
const vm = app.mount('#app');

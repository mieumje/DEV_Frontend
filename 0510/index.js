const App = {
  data() {
    return {
      fruits: [
        { id: '1', name: 'apple'},
        { id: '2', name: 'banana'},
        { id: '3', name: 'cherry'}
      ]
    }
  }
};

const app = Vue.createApp(App);
app.component('upper-name', {
  template: `<div>{{ name }}</div>`,
  props: ['name']
})
const vm = app.mount('#app');

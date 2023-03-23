const App = {
  data() {
    return {
      fruits: [
        { id: '1', name: 'apple'},
        { id: '2', name: 'banana'},
        { id: '3', name: 'cherry'}
      ]
    }
  },
  methods: {
    toUpper(fruit, upperName) {
      console.log(fruit, upperName)
      fruit.name = upperName
    }
  }
};

const app = Vue.createApp(App);
app.component('upper-name', {
  template: `<div @click="capitalize">{{ name }}</div>`,
  props: ['name'],
  methods: {
    capitalize() {
      // this.name = this.name.toUpperCase() // 하위 컴포넌트의 데이터는 readOnly라서 수정이 불가능.
      this.$emit('to-upper', this.name.toUpperCase())  // 수정을 하겠다는 요청을 외부(상위 컴포넌트)로 보내준다.
    }
  }
})
const vm = app.mount('#app');

<template>
  <h1>{{ msg }}</h1>
  <Hello />
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  components: {
    Hello: Hello,
  },
  data() {
    return {
      msg: "hello webpack.."
    }
  }
}
</script>
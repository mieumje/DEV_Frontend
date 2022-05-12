<template>
  <h1>{{ msg }}</h1>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Hello Vue!'
    };
  },
  created() {
    this.$fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => console.log(res));
  }
};
</script>
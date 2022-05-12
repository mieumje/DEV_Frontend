<template>
  <h1>{{ msg }}</h1>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Hello Vue!!!'
    };
  },
  async created() {
    const res = await this.$fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
  }
};
</script>
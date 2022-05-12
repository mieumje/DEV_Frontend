<template>
  <!-- eslint-disable -->
  <h1>{{ msg }}</h1>
  <Hello />
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
    };
  }
};
</script>
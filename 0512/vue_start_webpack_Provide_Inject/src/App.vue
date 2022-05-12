<template>
  <!-- eslint-disable -->
  <h1>{{ msg }}</h1>
  <Parent />
  <!-- eslint-enable -->
</template>

<script>
import Parent from '~/components/Parent';

export default {
  components: {
    Parent
  },
  provide() {
    return {
      msg: this.msg
    };
  },
  data() {
    return {
      msg: 'Hello vue!'
    };
  }
};
</script>
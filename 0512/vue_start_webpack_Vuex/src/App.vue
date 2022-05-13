<template>
  <!-- eslint-disable -->
  <h1>
    {{ msg }}
  </h1>
  <h2>
    {{ storeMsg }}
  </h2>
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
      msg: 'hello vue!'
    };
  },
  computed: {
    storeMsg() {
      return this.$store.state.msg;
    }
  }
};
</script>
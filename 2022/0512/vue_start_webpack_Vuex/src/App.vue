<template>
  <!-- eslint-disable -->
  <h1>
    {{ msg }}
  </h1>
  <h2>
    {{ storeMsg }} // {{ storeMessage }}
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
      msg: 'hello vue!~!'
    };
  },
  computed: {
    storeMsg() {
      return this.$store.state.msg;
    },
    storeMessage() {
      return this.$store.state.message.message; // state 뒤쪽으로 모듈 이름의 namspaced를 작성하고, 해당 모듈의 데이터를 가져온다.
    },
  }
};
</script>
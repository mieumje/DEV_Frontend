<template>
  <!-- eslint-disable -->
  <h1 @click="msg += '!!'">
    {{ msg }}
  </h1>
  <Parent />
  <!-- eslint-enable -->
</template>

<script>
import Parent from '~/components/Parent';
import { computed } from 'vue'; // computed 옵션이 아니라 원하는 곳에서 계산된 데이터를 만들 수 있다.

export default {
  components: {
    Parent
  },
  provide() {
    return {
      msg: computed(() => this.msg)
    };
  },
  data() {
    return {
      msg: 'Hello vue!'
    };
  }
};
</script>
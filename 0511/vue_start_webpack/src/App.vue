<template>
  <h1>{{ msg }}</h1>
  <Hello @click="msg += '?!'" />
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
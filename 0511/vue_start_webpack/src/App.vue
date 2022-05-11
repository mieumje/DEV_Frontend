<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello ref="hello" />
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
  },
  mounted() {
    console.log(this.$refs.hello.$refs.world);
  }
};
</script>
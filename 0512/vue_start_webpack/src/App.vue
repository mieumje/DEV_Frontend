<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello';
import sampleMixins from '~/mixins/sample';

export default {
  components: {
    Hello
  },
  mixins: [sampleMixins],
  data() {
    return {
      msg: 'Hello Vue!!!'
    };
  },
};
</script>
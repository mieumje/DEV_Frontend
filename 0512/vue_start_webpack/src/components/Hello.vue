<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>

<script>
import sampleMixins from '~/mixins/sample';

export default {
  mixins: [sampleMixins],
  data() {
    return {
      msg: 'Hello Vue~~'
    };
  }
};
</script>

<style scoped lang="scss">
$color: skyblue;
h1 {
  color: $color;
}
</style>
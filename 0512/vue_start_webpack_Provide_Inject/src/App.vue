<template>
  <!-- eslint-disable -->
  <h1>{{ msgs }}</h1>
  <Parent />
  <!-- eslint-enable -->
</template>

<script>
import Parent from '~/components/Parent';

export default {
  components: {
    Parent
  },
  data() {
    return {
      msg: 'Hello vue!'
    };
  }
};
</script>
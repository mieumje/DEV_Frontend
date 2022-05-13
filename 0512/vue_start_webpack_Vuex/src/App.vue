<template>
  <!-- eslint-disable -->
  <Hello />
  <button @click="increaseCount">Increase</button>
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';

export default {
  components: {
    Hello
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount');
    }
  }
};
</script>
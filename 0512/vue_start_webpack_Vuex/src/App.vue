<template>
  <!-- eslint-disable -->
  <Hello />
  <button @click="increaseCount">Increase</button>
  <World />
  <!-- eslint-enable -->
</template>

<script>
import Hello from '~/components/Hello';
import World from '~/components/World';

export default {
  components: {
    Hello,
    World
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount');
    }
  }
};
</script>